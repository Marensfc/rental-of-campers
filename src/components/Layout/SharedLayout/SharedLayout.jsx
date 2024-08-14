import '../../../index.css';
import Header from '../../Header/Header';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default SharedLayout;
