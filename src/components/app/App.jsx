import './App.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../Layout/SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';

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
