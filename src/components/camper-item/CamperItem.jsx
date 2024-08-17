import css from './CamperItem.module.css';
import icons from '../../assets/icons.svg';
import { useRef } from 'react';
import clsx from 'clsx';
import { isAddedToFavorite } from '../../utils/isAddedToFavorite';
import { addCardToLocalStorage } from '../../utils/addCardToLocalStorage';
import { removeCardFromLocalStorage } from '../../utils/removeCardFormLocalStorage';

import AdvantageItem from '../advantage-item/AdvantageItem';
import ShowMoreBtn from '../show-more-btn/ShowMoreBtn';

const CamperItem = ({
  id,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  previewImg,
  gallery,
  vehicleForm,
  mainAdvantages,
  additionalAdvantages,
  vehicleDetails,
  handleRemoveItem,
}) => {
  const addToFavoriteBtnRef = useRef();

  const handleAddToFavoritesBtnToggle = () => {
    const heartIcon = addToFavoriteBtnRef.current.firstElementChild;
    heartIcon.classList.toggle(`${css.addedToFavorites}`);

    const isFavorite = heartIcon.classList.contains(`${css.addedToFavorites}`);

    if (isFavorite) {
      const data = {
        id,
        name,
        price,
        rating,
        reviews,
        location,
        description,
        previewImg,
        gallery,
        vehicleForm,
        mainAdvantages,
        additionalAdvantages,
        vehicleDetails,
      };
      addCardToLocalStorage(data);
    }
    if (!isFavorite) {
      removeCardFromLocalStorage(id);
      handleRemoveItem(id);
    }
  };

  return (
    <li className={css.camperItem}>
      <div className={css.thumb}>
        <img src={previewImg} alt="camper" className={css.camperImg} />
      </div>
      <div className={css.camperInfoWrapper}>
        <p className={css.camperName}>{name}</p>
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
        <p className={css.Price_FavoriteWrapper}>
          €{`${price}.00`}{' '}
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
                isAddedToFavorite(id) && css.addedToFavorites
              )}
            >
              <use href={`${icons}#heart`}></use>
            </svg>
          </button>
        </p>
        <p className={css.camperDescription}>{description}</p>
        <ul className={css.advantagesList}>
          {Object.keys(mainAdvantages).map((advantage, index) => (
            <AdvantageItem
              key={index}
              iconName={advantage}
              width={20}
              height={20}
            >
              {typeof mainAdvantages[advantage] === 'number' &&
                `${mainAdvantages[advantage]} ${advantage}`}
              {typeof mainAdvantages[advantage] === 'string' &&
                mainAdvantages[advantage]}
            </AdvantageItem>
          ))}
          {/* <li>
            <AdvantageItem iconName={'users'} width={20} height={20} onlyFill>
              {features.adults} adults
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'gear-box'} width={20} height={20}>
              {features.transmission}
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'fuel'} width={20} height={20} onlyFill>
              {features.engine}
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'kitchen'} width={20} height={20}>
              Kitchen
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'bed'} width={20} height={20}>
              {features.beds} beds
            </AdvantageItem>
          </li>
          {features.TV !== 0 && (
            <li>
              <AdvantageItem iconName={'TV'} width={20} height={20} uppercase>
                {features.TV} TV
              </AdvantageItem>
            </li>
          )}
          {false}
          {features.shower !== 0 && (
            <li>
              <AdvantageItem iconName={'shower'} width={20} height={20}>
                {features.shower} shower
              </AdvantageItem>
            </li>
          )} */}
        </ul>
        <ShowMoreBtn />
      </div>
    </li>
  );
};

export default CamperItem;
