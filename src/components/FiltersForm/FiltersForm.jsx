import css from './FiltersForm.module.css';
import icons from '../../assets/icons.svg';

const FiltersForm = () => {
  return (
    <form className={css.filtersForm}>
      <p className={css.formTitle}>Filters</p>
      <p className={css.filtersEquipmentText}>Vehicle equipment</p>

      <div className={css.checkboxesWrapper}>
        <div className={css.inputWrapper}>
          <label htmlFor="checkAcId">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.iconOnlyFill}>
                <use href={`${icons}#AC`}></use>
              </svg>
              Ac
            </span>
          </label>
          <input id="checkAcId" type="checkbox" className="visually-hidden" />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="checkAutomaticId">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.icon}>
                <use href={`${icons}#gear-box`}></use>
              </svg>
              Automatic
            </span>
          </label>
          <input
            id="checkAutomaticId"
            type="checkbox"
            className="visually-hidden"
          />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="checkKitchenId">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.icon}>
                <use href={`${icons}#kitchen`}></use>
              </svg>
              Kitchen
            </span>
          </label>
          <input
            id="checkKitchenId"
            type="checkbox"
            className="visually-hidden"
          />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="checkTV-id">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.icon}>
                <use href={`${icons}#TV`}></use>
              </svg>
              TV
            </span>
          </label>
          <input id="checkTV-id" type="checkbox" className="visually-hidden" />
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="check-Shower/wc-id">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.icon}>
                <use href={`${icons}#shower`}></use>
              </svg>
              Shower/WC
            </span>
          </label>
          <input
            id="check-Shower/wc-id"
            type="checkbox"
            className="visually-hidden"
          />
        </div>
      </div>

      <p className={css.filtersTypeText}>Vehicle type</p>

      <div className={css.radioButtonsWrapper}>
        <div>
          <label htmlFor="radio-van-id">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.iconOnlyFill}>
                <use href={`${icons}#van`}></use>
              </svg>
              Van
            </span>
          </label>
          <input id="radio-van-id" type="radio" className="visually-hidden" />
        </div>

        <div>
          <label htmlFor="radio-fullyIntegrated-id">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.iconOnlyFill}>
                <use href={`${icons}#fully-integrated`}></use>
              </svg>
              Fully Integrated
            </span>
          </label>
          <input
            id="radio-fullyIntegrated-id"
            type="radio"
            className="visually-hidden"
          />
        </div>

        <div>
          <label htmlFor="radio-alcove-id">
            <span className={css.checbox_Radio_IconContainer}>
              <svg width={32} height={32} className={css.iconOnlyFill}>
                <use href={`${icons}#alcove`}></use>
              </svg>
              Alcove
            </span>
          </label>
          <input
            id="radio-alcove-id"
            type="radio"
            className="visually-hidden"
          />
        </div>
      </div>

      <button type="submit" className={css.btnSearch}>
        Search
      </button>
    </form>
  );
};

export default FiltersForm;
