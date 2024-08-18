import css from './CamperItem.module.css';
import icons from '../../assets/icons.svg';
import { useRef } from 'react';
import clsx from 'clsx';
import { isAddedToFavorite } from '../../utils/isAddedToFavorite';
import { addCardToLocalStorage } from '../../utils/addCardToLocalStorage';
import { removeCardFromLocalStorage } from '../../utils/removeCardFromLocalStorage';
import { useLocation } from 'react-router-dom';

import { sortAdvantages } from '../../utils/sortAdvantages';

import AdvantageItem from '../advantage-item/AdvantageItem';

const CamperItem = ({
  setAdvertInfo,
  handleRemoveItem,
  requiredInfo,
  requiredAdvertAdvantages,
  allAdvertInfo,
}) => {
  const addToFavoriteBtnRef = useRef();
  const pageLocation = useLocation();

  const handleAddToFavoritesBtnToggle = () => {
    const heartIcon = addToFavoriteBtnRef.current.firstElementChild;
    heartIcon.classList.toggle(`${css.addedToFavorites}`);

    const isFavorite = heartIcon.classList.contains(`${css.addedToFavorites}`);

    if (isFavorite) {
      addCardToLocalStorage({
        requiredInfo,
        requiredAdvertAdvantages,
        allAdvertInfo,
      });
    }
    if (!isFavorite) {
      removeCardFromLocalStorage(requiredInfo.id);
      if (pageLocation.pathname === '/favorites') {
        handleRemoveItem(requiredInfo.id);
      }
    }
  };

  console.log('all info:', allAdvertInfo);

  return (
    <li className={css.camperItem}>
      <div className={css.thumb}>
        <img
          src={requiredInfo.previewImg}
          alt="camper"
          className={css.camperImg}
        />
      </div>
      <div className={css.camperInfoWrapper}>
        <p className={css.camperName}>{requiredInfo.name}</p>
        <div className={css.rating_locationWrapper}>
          <p className={css.camperRating}>
            <svg width="16" height="16" className={css.ratingIcon}>
              <use href={`${icons}#rating`}></use>
            </svg>{' '}
            {requiredInfo.rating}({requiredInfo.reviews.length} Reviews)
          </p>
          <p className={css.camperLocation}>
            <svg width="16" height="16" className={css.mapPinIcon}>
              <use href={`${icons}#map-pin`}></use>
            </svg>
            {requiredInfo.location}
          </p>
        </div>
        <p className={css.Price_FavoriteWrapper}>
          €{`${requiredInfo.price}.00`}{' '}
          <button
            type="button"
            className={css.favoriteBtn}
            onClick={handleAddToFavoritesBtnToggle}
            ref={addToFavoriteBtnRef}
          >
            <svg
              width="24"
              height="24"
              className={clsx(
                css.heartIcon,
                isAddedToFavorite(requiredInfo.id) && css.addedToFavorites
              )}
            >
              <use href={`${icons}#heart`}></use>
            </svg>
          </button>
        </p>
        <p className={css.camperDescription}>{requiredInfo.description}</p>
        <ul className={css.advantagesList}>
          {Object.keys(sortAdvantages(requiredAdvertAdvantages)).map(
            (advantage, index) => (
              <AdvantageItem
                key={index}
                iconName={advantage}
                width={20}
                height={20}
              >
                {typeof requiredAdvertAdvantages[advantage] === 'number' &&
                  `${requiredAdvertAdvantages[advantage]} ${advantage}`}
                {typeof requiredAdvertAdvantages[advantage] === 'string' &&
                  requiredAdvertAdvantages[advantage]}
              </AdvantageItem>
            )
          )}
        </ul>
        <button
          type="button"
          className={css.showMoreBtn}
          onClick={() => setAdvertInfo(allAdvertInfo)}
        >
          Show more
        </button>
      </div>
    </li>
  );
};

export default CamperItem;
