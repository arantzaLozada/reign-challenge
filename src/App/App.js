import { Route, Routes } from 'react-router-dom';
import { FilterNameProvider } from '../context/filterContext';
import { FavoritesPage } from '../pages/FavoritesPage';
import { HomePage } from '../pages/HomePage';
import './App.css';

export function App() {
  return (
    <FilterNameProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </FilterNameProvider>
  );
}
