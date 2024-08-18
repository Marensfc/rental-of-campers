import css from './CamperList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { fetchAdverts } from '../../redux/adverts/operations';
import { selectAdverts, selectIsLoading } from '../../redux/adverts/selectors';
import { useModal } from '../../hooks/useModal';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CamperItem from '../camper-item/CamperItem';
import LoadMoreBtn from '../load-more-btn/LoadMoreBtn';
import Loader from '../loader/Loader';
import ModalDetailedInfo from '../modal-detailed-info/ModalDetailedInfo';

const CamperList = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);

  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  let limit = 4;
  let totalPagesCount = useRef();

  const [currentAdvertInfo, setCurrentAdvertInfo] = useState(null);

  const openModalAndSetAdvertInfo = advertInfo => {
    setCurrentAdvertInfo(advertInfo);
    openModal();
  };

  useEffect(() => {
    const load = async () => {
      try {
        if (page === 1) {
          const data = await dispatch(fetchAdverts({ page, limit })).unwrap();
          if (data.adverts.length === 0) {
            toast.error(
              'Sorry, there aro adverts mathing your search query. Please try again!'
            );
            setShowBtn(false);
            return;
          }
          totalPagesCount.current = data.totalPages;
          setShowBtn(true);
        }

        if (page > 1) {
          dispatch(fetchAdverts({ page, limit }));
          totalPagesCount.current -= 1;
        }

        if (totalPagesCount.current === 0) {
          toast.info(
            'Sorry, but you have reached the end of the search results'
          );
          setShowBtn(false);
          return;
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    load();
  }, [dispatch, page, limit]);

  return (
    <div className={css.camperListWrapper}>
      <ul className={css.camperList}>
        {adverts.map(advert => {
          return (
            <CamperItem
              key={advert._id}
              setAdvertInfo={openModalAndSetAdvertInfo}
              requiredInfo={{
                id: advert._id,
                name: advert.name,
                previewImg: advert.gallery[0],
                price: advert.price,
                rating: advert.rating,
                reviews: advert.reviews,
                location: advert.location,
                description: advert.description,
              }}
              requiredAdvertAdvantages={{
                adults: advert.adults,
                airConditioner: advert.details.airConditioner,
                transmission: advert.transmission,
                engine: advert.engine,
                kitchen: advert.details.kitchen,
                TV: advert.details.TV,
                shower: advert.details.shower,
              }}
              allAdvertInfo={{ ...advert }}
            />
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {showBtn && isLoading === false && (
        <LoadMoreBtn increasePageFunction={() => setPage(page + 1)} />
      )}
      <ModalDetailedInfo
        isOpen={isOpen}
        closeModal={closeModal}
        advertInfo={currentAdvertInfo}
        setAdvertInfo={setCurrentAdvertInfo}
      />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default CamperList;
