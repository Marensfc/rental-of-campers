import css from './CatalogPage.module.css';
import CamperList from '../../CamperList/CamperList';
import FiltersForm from '../../FiltersForm/FiltersForm';
import Location from '../../Location/Location';

const CatalogPage = () => {
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
