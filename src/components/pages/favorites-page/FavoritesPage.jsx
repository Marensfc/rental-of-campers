import css from './FavoritesPage.module.css';
import CamperItem from '../../camper-item/CamperItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const [favoriteAdverts, setFavoriteAdverts] = useState(
    JSON.parse(localStorage.getItem('adverts')) || []
  );

  const removeItemFromFavorites = id => {
    const newItems = favoriteAdverts.filter(advert => advert.id !== id);
    setFavoriteAdverts(newItems);
  };

  return (
    <ul className={css.favoritesList}>
      {favoriteAdverts.length > 0 ? (
        favoriteAdverts.map(advert => (
          <CamperItem
            key={advert.id}
            id={advert.id}
            name={advert.name}
            price={advert.price}
            rating={advert.rating}
            reviews={advert.reviews}
            location={advert.location}
            description={advert.description}
            previewImg={advert.previewImg}
            gallery={advert.gallery}
            vehicleForm={advert.form}
            mainAdvantages={{
              adults: advert.adults,
              children: advert.children,
              AC: advert.mainAdvantages.AC,
              transmission: advert.transmission,
              engine: advert.engine,
              kitchen: advert.mainAdvantages.kitchen,
              TV: advert.mainAdvantages.TV,
              shower: advert.mainAdvantages.shower,
              beds: advert.mainAdvantages.beds,
            }}
            additionAdvantages={{
              airConditioner: advert.mainAdvantages.AC,
              bathroom: advert.mainAdvantages.bathroom,
              CD: advert.mainAdvantages.CD,
              radio: advert.mainAdvantages.radio,
              toilet: advert.mainAdvantages.toilet,
              freezer: advert.mainAdvantages.freezer,
              hob: advert.mainAdvantages.hob,
              microwave: advert.mainAdvantages.microwave,
            }}
            vehicleDetails={{
              length: advert.length,
              width: advert.width,
              height: advert.height,
              tank: advert.tank,
              consumption: advert.consumption,
              gas: advert.mainAdvantages.gas,
              water: advert.mainAdvantages.water,
            }}
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
  );
};

export default FavoritesPage;
