import '../../index.css';
import { TbCamper } from 'react-icons/tb';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const Header = () => {
  return (
    <header>
      <div className={clsx('container', [css.headerContainer])}>
        <a href="/" className={css.logo}>
          <TbCamper />
          <span>Campers</span>
        </a>
        <nav>
          <ul className={css.headerNavList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
