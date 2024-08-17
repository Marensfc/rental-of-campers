import css from './CamperList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { fetchAdverts } from '../../redux/adverts/operations';
import { selectAdverts, selectIsLoading } from '../../redux/adverts/selectors';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CamperItem from '../camper-item/CamperItem';
import LoadMoreBtn from '../load-more-btn/LoadMoreBtn';
import Loader from '../loader/Loader';
import ModalDetailedInfo from '../modal-detailed-info/ModalDetailedInfo';
import { useModal } from '../../hooks/useModal';

import { sortAdvertInfo } from '../../utils/sortAdvertInfo';

const CamperList = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);

  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  let limit = 4;
  let totalPagesCount = useRef();

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
              openModal={openModal}
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
        {/* {adverts.map(advert => (
          <CamperItem
            openModal={openModal}
            key={advert._id}
            id={advert._id}
            name={advert.name}
            price={advert.price}
            rating={advert.rating}
            reviews={advert.reviews}
            location={advert.location}
            description={advert.description}
            previewImg={advert.gallery[0]}
            gallery={advert.gallery}
            vehicleForm={advert.form}
            mainAdvantages={{
              adults: advert.adults,
              children: advert.children,
              AC: advert.details.airConditioner,
              transmission: advert.transmission,
              engine: advert.engine,
              kitchen: advert.details.kitchen,
              TV: advert.details.TV,
              shower: advert.details.shower,
              beds: advert.details.beds,
            }}
            additionAdvantages={{
              airConditioner: advert.details.airConditoner,
              bathroom: advert.details.bathroom,
              CD: advert.details.CD,
              radio: advert.details.radio,
              toilet: advert.details.toilet,
              freezer: advert.details.freezer,
              hob: advert.details.hob,
              microwave: advert.details.microwave,
            }}
            vehicleDetails={{
              length: advert.length,
              width: advert.width,
              height: advert.height,
              tank: advert.tank,
              consumption: advert.consumption,
              gas: advert.details.gas,
              water: advert.details.water,
            }}
          />
        ))} */}
      </ul>
      {isLoading && <Loader />}
      {showBtn && isLoading === false && (
        <LoadMoreBtn increasePageFunction={() => setPage(page + 1)} />
      )}
      {/* <ModalDetailedInfo isOpen={isOpen} closeModal={closeModal} detailedInfo /> */}
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
