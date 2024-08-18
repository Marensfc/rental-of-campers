import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <p className={css.greeting}>Glad to see you here!</p>
      <p className={css.text}>
        {' '}
        If you dream of traveling but on wheels, you are in the right place.
      </p>
      <p className={css.text}>On this web page called Campers, you can:</p>
      <ul>
        <li>
          <p>Find any camper to your liking from the catalog page.</p>
        </li>
        <li>
          <p>
            Look at reviews and detailed information by clicking on the seam sea
            button.
          </p>
        </li>
        <li>
          <p>
            Add the camper you like to your favorites on the favorites page.
          </p>
        </li>
        <li>
          <p>Book a camper for any time.</p>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
