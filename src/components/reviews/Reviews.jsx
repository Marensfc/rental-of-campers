import css from './Reviews.module.css';

import BookingForm from '../booking-form/BookingForm';
import icons from '../../assets/icons.svg';

const Reviews = ({ reviews }) => {
  return (
    <div className={css.reviews_form_wrapper}>
      <div className={css.reviewsWrapper}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div>
              <div className={css.nameRatingWrapper}>
                <span className={css.userAvatar}>
                  {review.reviewer_name.slice(0, 1)}
                </span>
                <p className={css.userName}>{review.reviewer_name}</p>
                <div className={css.rating}>
                  <svg width={16} height={16} className={css.ratingIcon}>
                    <use href={`${icons}#rating`}></use>
                  </svg>
                  <svg width={16} height={16} className={css.ratingIcon}>
                    <use href={`${icons}#rating`}></use>
                  </svg>
                  <svg width={16} height={16} className={css.ratingIcon}>
                    <use href={`${icons}#rating`}></use>
                  </svg>
                  <svg width={16} height={16} className={css.ratingIcon}>
                    <use href={`${icons}#rating`}></use>
                  </svg>
                </div>
              </div>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <BookingForm />
    </div>
  );
};

export default Reviews;
