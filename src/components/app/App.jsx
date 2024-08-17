import './App.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../layout/shared-layout/SharedLayout';
import HomePage from '../pages/home-page/HomePage';
import CatalogPage from '../pages/catalog-page/CatalogPage';
import FavoritesPage from '../pages/favorites-page/FavoritesPage';

function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
