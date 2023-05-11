import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from 'pages/MainPage';
// import { ProtectedRoute } from 'components';
import { WelcomePage } from 'pages';
import './App.scss';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/welcome-page" />} />
        <Route path="*" element={<Navigate to="/welcome-page" />} />
        <Route path="welcome-page" element={<WelcomePage />} />
        {/* //TODO: ProtectedRoute example */}
        {/* <Route
          path="main-page"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="main-page"
          element={<MainPage />}
        />
        {/* //TODO: Redirect for google auth */}
        {/* <Route path="/auth/google" element={<div />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
