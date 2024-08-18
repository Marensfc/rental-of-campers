import css from './BookingForm.module.css';
import icons from '../../assets/icons.svg';
import { useState } from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const initialValues = {
  name: '',
  email: '',
  bookindDate: '',
  comment: '',
};

const BookingForm = () => {
  const handleSubmit = values => {};

  const handleChangeDate = e => {
    console.log(e);
  };

  return (
    <Formik initialValues={initialValues}>
      <Form onSubmit={handleSubmit} className={css.bookingForm}>
        <p className={css.formTitle}>Book your campervan now</p>
        <p className={css.formAdviceText}>
          Stay connected! We are always ready to help you.
        </p>
        <Field
          type="text"
          name="name"
          className={css.nameInput}
          placeholder="Name"
        />
        <Field
          type="email"
          name="email"
          className={css.emailInput}
          placeholder="Email"
        />
        <span className={css.datePickerToggleContainer}>
          <DatePicker
            className={css.bookingDateInput}
            onChange={handleChangeDate}
            toggleCalendarOnIconClick
            wrapperClassName={css.wrapperDatePicker}
            calendarIconClassName={css.iconDatePicker}
            placeholderText="Booking date"
            showIcon
            icon={
              <svg width={20} height={20}>
                <use href={`${icons}#booking-date`}></use>
              </svg>
            }
          />
        </span>
        <Field
          as="textarea"
          name="comment"
          className={css.inputComment}
          placeholder="Comment"
        />
        <button type="submit" className={css.sendBtn}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default BookingForm;
