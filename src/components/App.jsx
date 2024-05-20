import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/Home/HomePage';
import RegistrationPage from '../pages/Registration/RegistrationPage';
import LoginPage from '../pages/Login/LoginPage';
import LibraryPage from '../pages/Library/LibraryPage';
import ReadingPage from '../pages/Reading/ReadingPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/reading" element={<ReadingPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
