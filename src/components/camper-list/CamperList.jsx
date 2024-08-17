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

const CamperList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);
  let limit = 4;
  let totalPagesCount = useRef();

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const load = async () => {
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
        toast.info('Sorry, but you have reached the end of the search results');
        setShowBtn(false);
        return;
      }
    };

    load();
  }, [dispatch, page, limit]);

  return (
    <div className={css.camperListWrapper}>
      <ul className={css.camperList}>
        {adverts.map(advert => (
          <CamperItem
            key={advert._id}
            name={advert.name}
            price={advert.price}
            previewImg={advert.gallery[0]}
            rating={advert.rating}
            location={advert.location}
            description={advert.description}
            reviewsCount={advert.reviews.length}
            features={{
              adults: advert.adults,
              transmission: advert.transmission,
              engine: advert.engine,
              kitchen: advert.details.kitchen,
              beds: advert.details.beds,
              TV: advert.details.TV,
              shower: advert.details.shower,
            }}
          />
        ))}
      </ul>
      {isLoading && <Loader />}
      {showBtn && isLoading === false && (
        <LoadMoreBtn increasePageFunction={() => setPage(page + 1)} />
      )}
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
