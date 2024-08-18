import css from './Features.module.css';

import AdvantageItem from '../advantage-item/AdvantageItem';
import BookingForm from '../booking-form/BookingForm';

const advantages = [
  'gas',
  'water',
  'children',
  'radio',
  'hob',
  'microwave',
  'freezer',
  'engine',
  'CD',
];

const Features = ({ detailedInfo }) => {
  console.log(detailedInfo);

  return (
    <div className={css.features_form_wrapper}>
      <div style={{ width: '430px' }}>
        <ul className={css.advantagesList}>
          {Object.keys(detailedInfo.advantages).map((advantage, index) => (
            <li key={index}>
              <AdvantageItem iconName={advantage} width={20} height={20}>
                {advantage}
              </AdvantageItem>
            </li>
          ))}
        </ul>
        <p className={css.detailsText}>Vehicle details</p>
        <div className={css.table}>
          <div className={css.tableField}>
            <p>Form</p>
            <p>{detailedInfo.vehicleDetails.form}</p>
          </div>
          <div className={css.tableField}>
            <p>Length</p>
            <p>{detailedInfo.vehicleDetails.length}</p>
          </div>
          <div className={css.tableField}>
            <p>Width</p>
            <p>{detailedInfo.vehicleDetails.width}</p>
          </div>
          <div className={css.tableField}>
            <p>Height</p>
            <p>{detailedInfo.vehicleDetails.height}</p>
          </div>
          <div className={css.tableField}>
            <p>Tank</p>
            <p>{detailedInfo.vehicleDetails.tank}</p>
          </div>
          <div className={css.tableField}>
            <p>Consumption</p>
            <p>{detailedInfo.vehicleDetails.consumption}</p>
          </div>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default Features;
