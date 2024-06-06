import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/Home/HomePage';
import RegistrationPage from '../pages/Registration/RegistrationPage';
import LoginPage from '../pages/Login/LoginPage';
import LibraryPage from '../pages/Library/LibraryPage';
import ReadingPage from '../pages/Reading/ReadingPage';
import RecommendedPage from '../pages/Recommended/RecommendedPage';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/recommended"
            element={
              <PrivateRoute
                redirectTo="/recommended"
                component={<RecommendedPage />}
              />
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute redirectTo="/library" component={<LibraryPage />} />
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoute redirectTo="/library" component={<ReadingPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
