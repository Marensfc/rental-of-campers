import css from './Location.module.css';
import icons from '../../assets/icons.svg';

const Location = () => {
  return (
    <div className={css.locationWrapper}>
      <label className={css.locationLabel}>Location</label>
      <div className={css.locationInputWrapper}>
        <input
          type="text"
          className={css.locationInput}
          value="Ukraine, Kyiv"
        />
        <svg width={18} height={20} className={css.mapPinIcon}>
          <use href={`${icons}#map-pin`}></use>
        </svg>
      </div>
    </div>
  );
};

export default Location;
