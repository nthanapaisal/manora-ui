import { Outlet, useLocation } from 'react-router-dom';
import Topbar from '../components/Topbar'; // Assuming Topbar is in the same directory

export default function RootLayout() {
  const location = useLocation();

  // Determine if the current location is one of the excluded paths
  const excludedPaths = ['/login', '/validate', '/resetpassword'];
  const isExcludedPath = excludedPaths.includes(location.pathname);

  return (
    <div>
      {!isExcludedPath && <Topbar />} {/* Show Topbar unless on excluded paths */}
      <Outlet />
    </div>
  );
};
