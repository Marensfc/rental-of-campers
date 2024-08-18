import css from './CatalogPage.module.css';
import CamperList from '../../camper-list/CamperList';
import FiltersForm from '../../filters-form/FiltersForm';
import Location from '../../location/Location';

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
