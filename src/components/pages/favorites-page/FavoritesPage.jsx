import css from './FavoritesPage.module.css';
import CamperItem from '../../camper-item/CamperItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';
import ModalDetailedInfo from '../../modal-detailed-info/ModalDetailedInfo';

const FavoritesPage = () => {
  const [currentAdvertInfo, setCurrentAdvertInfo] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();

  const [favoriteAdverts, setFavoriteAdverts] = useState(
    JSON.parse(localStorage.getItem('adverts')) || []
  );

  const removeItemFromFavorites = id => {
    const newItems = favoriteAdverts.filter(
      advert => advert.requiredInfo.id !== id
    );
    setFavoriteAdverts(newItems);
  };

  const openModalAndSetAdvertInfo = advertInfo => {
    setCurrentAdvertInfo(advertInfo);
    openModal();
  };

  console.log(favoriteAdverts);

  return (
    <div className={css.favrotiePageWrapper}>
      <ul className={css.favoritesList}>
        {favoriteAdverts.length > 0 ? (
          favoriteAdverts.map(advert => (
            <CamperItem
              key={advert.requiredInfo.id}
              setAdvertInfo={openModalAndSetAdvertInfo}
              openModal={openModal}
              requiredInfo={{
                id: advert.requiredInfo.id,
                name: advert.requiredInfo.name,
                previewImg: advert.requiredInfo.previewImg,
                price: advert.requiredInfo.price,
                rating: advert.requiredInfo.rating,
                reviews: advert.requiredInfo.reviews,
                location: advert.requiredInfo.location,
                description: advert.requiredInfo.description,
              }}
              requiredAdvertAdvantages={{
                adults: advert.requiredInfo.adults,
                airConditioner: advert.requiredAdvertAdvantages.airConditioner,
                transmission: advert.transmission,
                engine: advert.engine,
                kitchen: advert.requiredAdvertAdvantages.kitchen,
                TV: advert.requiredAdvertAdvantages.TV,
                shower: advert.requiredAdvertAdvantages.shower,
              }}
              allAdvertInfo={{ ...advert.allAdvertInfo }}
              handleRemoveItem={removeItemFromFavorites}
            />
          ))
        ) : (
          <p className={css.screenSaver}>
            Add something to favorites from{' '}
            <Link to="/catalog" className={css.catalogPageLink}>
              catalog page
            </Link>
            !
          </p>
        )}
      </ul>
      <ModalDetailedInfo
        isOpen={isOpen}
        closeModal={closeModal}
        advertInfo={currentAdvertInfo}
        setAdvertInfo={setCurrentAdvertInfo}
      />
    </div>
  );
};

export default FavoritesPage;
