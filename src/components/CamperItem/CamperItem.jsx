import css from './CamperItem.module.css';
import camper from '../../assets/images/camper.png';
import icons from '../../assets/icons.svg';

import AdvantageItem from '../AdvantageItem/AdvantageItem';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';

const CamperItem = () => {
  return (
    <li className={css.camperItem}>
      <div className={css.thumb}>
        <img src={camper} alt="asd" className={css.camperImg} />
      </div>
      <div className={css.camperInfoWrapper}>
        <p className={css.camperName}>Mavericks</p>
        <div className={css.rating_locationWrapper}>
          <p className={css.camperRating}>
            <svg width="16" height="16" className={css.ratingIcon}>
              <use href={`${icons}#rating`}></use>
            </svg>{' '}
            4.4(2 Reviews)
          </p>
          <p className={css.camperLocation}>
            <svg width="16" height="16" className={css.mapPinIcon}>
              <use href={`${icons}#map-pin`}></use>
            </svg>
            Kyiv, Ukraine
          </p>
        </div>
        <p className={css.Price_FavoriteWrapper}>
          €8000.00{' '}
          <svg width="24" height="24" className={css.heartIcon}>
            <use href={`${icons}#heart`}></use>
          </svg>
        </p>
        <p className={css.camperDescription}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads.
        </p>
        <ul className={css.advantagesList}>
          <li>
            <AdvantageItem iconName={'users'} width={20} height={20}>
              2 adults
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'gear-box'} width={20} height={20}>
              Automatic
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'fuel'} width={20} height={20}>
              Petrol
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'kitchen'} width={20} height={20}>
              1 kitchen
            </AdvantageItem>
          </li>
          <li>
            <AdvantageItem iconName={'bed'} width={20} height={20}>
              1 bed
            </AdvantageItem>
          </li>
        </ul>
        <ShowMoreBtn />
      </div>
    </li>
  );
};

export default CamperItem;
