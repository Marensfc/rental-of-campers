import css from './ModalDetailedInfo.module.css';
import icons from '../../assets/icons.svg';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ModalDetailedInfo = ({
  isOpen,
  closeModal,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  gallery,
  vehicleForm,
  mainAdvantages,
  additionalAdvantages,
  vehicleDetails,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Detailed advert info modal"
      style={customStyles}
    >
      <button type="button" onClick={closeModal}>
        <svg width={32} height={32}>
          <use href={`${icons}#close-btn`}></use>
        </svg>
      </button>
      <p>{name}</p>
      <div className={css.rating_locationWrapper}>
        <p className={css.camperRating}>
          <svg width="16" height="16" className={css.ratingIcon}>
            <use href={`${icons}#rating`}></use>
          </svg>{' '}
          {rating}({reviews.length} reviews)
        </p>
        <p className={css.camperLocation}>
          <svg width="16" height="16" className={css.mapPinIcon}>
            <use href={`${icons}#map-pin`}></use>
          </svg>
          {location}
        </p>
      </div>
      <p>€{price}.00</p>
      <ul>
        {gallery.map((img, index) => (
          <li key={index}>
            <div className="thumb">
              <img src={img} alt="camper" />
            </div>
          </li>
        ))}
      </ul>
      <p>{description}</p>
      <button type="button" className={css.activeBtnOption}>
        Features
      </button>
      <button type="button">Reviews</button>
    </Modal>
  );
};

export default ModalDetailedInfo;
