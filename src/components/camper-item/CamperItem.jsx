import css from './CamperItem.module.css';
import icons from '../../assets/icons.svg';

import AdvantageItem from '../advantage-item/AdvantageItem';
import ShowMoreBtn from '../show-more-btn/ShowMoreBtn';
import { useRef } from 'react';

const CamperItem = ({
  name,
  price,
  previewImg,
  rating,
  location,
  description,
  reviewsCount,
  features,
}) => {
  const addToFavoriteBtnRef = useRef();

  const handleAddToFavoritesBtnToggle = () => {
    const heartIcon = addToFavoriteBtnRef.current.firstElementChild;
    heartIcon.classList.toggle(`${css.addedToFavorites}`);
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
            {rating}({reviewsCount} reviews)
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
            <svg width="24" height="24" className={css.heartIcon}>
              <use href={`${icons}#heart`}></use>
            </svg>
          </button>
        </p>
        <p className={css.camperDescription}>{description}</p>
        <ul className={css.advantagesList}>
          <li>
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
          )}
        </ul>
        <ShowMoreBtn />
      </div>
    </li>
  );
};

export default CamperItem;
