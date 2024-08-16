import css from './CamperList.module.css';
import CamperItem from '../CamperItem/CamperItem';
import { selectAdverts } from '../../redux/adverts/selectors';
import { useSelector } from 'react-redux';

const CamperList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <ul className={css.camperList}>
      {adverts.map(advert => (
        <CamperItem
          key={advert._id}
          name={advert.name}
          price={advert.price}
          previewImg={advert.gallery[0]}
          rating={advert.rating}
          location={advert.location}
          description={advert.description}
          reviewsCount={advert.reviews.length}
          features={{
            adults: advert.adults,
            transmission: advert.transmission,
            engine: advert.engine,
            kitchen: advert.details.kitchen,
            beds: advert.details.beds,
            TV: advert.details.TV,
            shower: advert.details.shower,
          }}
        />
      ))}
    </ul>
  );
};

export default CamperList;
