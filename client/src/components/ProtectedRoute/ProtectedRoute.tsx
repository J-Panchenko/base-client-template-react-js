import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = Cookies.get('accessToken') || '';

  return token ? children : <Navigate to="/welcome-user" replace />;
}

export default ProtectedRoute;
