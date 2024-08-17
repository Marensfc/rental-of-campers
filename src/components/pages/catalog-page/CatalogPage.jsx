import css from './CatalogPage.module.css';
import CamperList from '../../camper-list/CamperList';
import FiltersForm from '../../filters-form/FiltersForm';
import Location from '../../location/Location';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAdverts } from '../../../redux/adverts/operations';
// import {
//   selectTotalPages,
//   selectIsLoading,
// } from '../../../redux/adverts/selectors';

const CatalogPage = () => {
  // const dispatch = useDispatch();
  // const totalPages = useSelector(selectTotalPages);
  // const isLoading = useSelector(selectIsLoading);

  // const [page, setPage] = useState(1);

  // let limit = 4;

  // useEffect(() => {
  //   dispatch(fetchAdverts({ page, limit }));
  // }, [dispatch, page, limit]);

  return (
    <div className={css.catalogPage}>
      <div className={css.location_Filters_Wrapper}>
        <Location />
        <FiltersForm />
      </div>
      <CamperList
      // increasePage={() => setPage(page + 1)}
      // isLoading={isLoading}
      />
    </div>
  );
};

export default CatalogPage;
