import css from './Layout.module.css';
import '../../../index.css';
import Header from '../../header/Header';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default SharedLayout;
