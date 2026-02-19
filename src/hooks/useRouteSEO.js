import { useLocation } from 'react-router-dom';
// import { getRouteData } from '../config/routes';
import * as RoutesConfig from '../config/routes'; 

// Hook to get SEO data for current route
export const useRouteSEO = () => {
  const location = useLocation();
  const routeData = RoutesConfig.getRouteData(location.pathname) || {};

  return {
    title: routeData.title || "",
    description: routeData.desc || "",
    keywords: routeData.keywords || "",
    path: location.pathname
  };
};
