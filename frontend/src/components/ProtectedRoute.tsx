import {useSelector} from 'react-redux'
import type {RootState} from '../app/store'

interface ProtectedRouteProps {
    children: React.ReactNode;
  }
  
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = useSelector((state: RootState) => state.auth.token);
  
    if (!token) {
      // 로그인 안 되어 있으면 /login으로 이동
      return <Navigate to="/login" replace />;
    }
  
    // 로그인 되어 있으면 children 렌더링
    return <>{children}</>;
  };
  
  export default ProtectedRoute;