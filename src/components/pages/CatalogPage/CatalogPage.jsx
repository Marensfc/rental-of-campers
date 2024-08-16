import css from './CatalogPage.module.css';
import CamperList from '../../CamperList/CamperList';
import FiltersForm from '../../FiltersForm/FiltersForm';
import Location from '../../Location/Location';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../../../redux/adverts/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div className={css.catalogPage}>
      <div className={css.location_Filters_Wrapper}>
        <Location />
        <FiltersForm />
      </div>
      <CamperList />
    </div>
  );
};

export default CatalogPage;
