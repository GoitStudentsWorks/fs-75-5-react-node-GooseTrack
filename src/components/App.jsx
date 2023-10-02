// import ThemeTogler from "./User/ThemeToggler/ThemeToggler";
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Homepage = lazy(() => import('../pages/HomePage/Homepage'));
const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage/StatisticsPage'));
const Page404 = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
