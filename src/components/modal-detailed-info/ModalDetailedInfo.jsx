import css from './ModalDetailedInfo.module.css';

import icons from '../../assets/icons.svg';
import Modal from 'react-modal';
import clsx from 'clsx';

import Features from '../features/Features';
import Reviews from '../reviews/Reviews';
import { sortDetailedInfo } from '../../utils/sortAdvantages';
import { useRef, useState } from 'react';

const customStyles = {
  content: {
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '40px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '20px',
    maxWidth: '982px',
    border: 'none',
    inset: 'unset',
    overflowY: 'auto',
    maxHeight: '90vh',
  },
};

Modal.setAppElement('#root');

const ModalDetailedInfo = ({
  isOpen,
  closeModal,
  advertInfo,
  setAdvertInfo,
}) => {
  const [selectedOption, setSelectedOption] = useState('Features');

  const toggleActiveOptionClass = e => {
    const currentBtn = e.target;
    const isBtnSelected = currentBtn.classList.contains(`${css.activeOption}`);
    const otherButtons = [...currentBtn.parentElement.children].filter(
      btn => btn.textContent !== currentBtn.textContent
    );

    if (isBtnSelected) {
      return;
    }
    if (!isBtnSelected) {
      currentBtn.classList.add(`${css.activeOption}`);
      otherButtons.forEach(btn => btn.classList.remove(`${css.activeOption}`));
      setSelectedOption(currentBtn.textContent);
    }
  };

  const closeModalAndRemoveInfo = () => {
    closeModal();
    setAdvertInfo(null);
    setSelectedOption('Features');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      bodyOpenClassName={css.stopScrolling}
      contentLabel="Detailed advert info modal"
      overlayClassName={css.overlay}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      {advertInfo && (
        <>
          <button
            type="button"
            onClick={closeModalAndRemoveInfo}
            className={css.closeModalBtn}
          >
            <svg width={32} height={32} className={css.iconCloseModal}>
              <use href={`${icons}#close-btn`}></use>
            </svg>
          </button>
          <p className={css.camperName}>{advertInfo.name}</p>
          <div className={css.rating_locationWrapper}>
            <p className={css.camperRating}>
              <svg width="16" height="16" className={css.ratingIcon}>
                <use href={`${icons}#rating`}></use>
              </svg>{' '}
              {advertInfo.rating} ({advertInfo.reviews.length} Reviews)
            </p>
            <p className={css.camperLocation}>
              <svg width="16" height="16" className={css.mapPinIcon}>
                <use href={`${icons}#map-pin`}></use>
              </svg>
              {advertInfo.location}
            </p>
          </div>
          <p className={css.price}>€{advertInfo.price}.00</p>
          <ul className={css.gallery}>
            {advertInfo.gallery.map((img, index) => (
              <li key={index} className={css.galleryItem}>
                <div className={css.thumb}>
                  <img src={img} alt="camper" />
                </div>
              </li>
            ))}
          </ul>
          <p className={css.description}>{advertInfo.description}</p>
          <div className={css.tabsWrapper}>
            <button
              type="button"
              className={clsx(css.chooseTabBtn, css.activeOption)}
              onClick={toggleActiveOptionClass}
            >
              Features
            </button>
            <button
              type="button"
              className={css.chooseTabBtn}
              onClick={toggleActiveOptionClass}
            >
              Reviews
            </button>
          </div>
          {selectedOption === 'Features' ? (
            <Features detailedInfo={sortDetailedInfo(advertInfo)} />
          ) : (
            <Reviews reviews={advertInfo.reviews} />
          )}
        </>
      )}
    </Modal>
  );
};

export default ModalDetailedInfo;
