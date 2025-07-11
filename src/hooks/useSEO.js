import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags } from '../utils/seoUtils';

const useSEO = (title, description, keywords, image = null) => {
  const location = useLocation();

  useEffect(() => {
    // Update meta tags when component mounts or dependencies change
    updateMetaTags(title, description, keywords, image);
  }, [title, description, keywords, image, location.pathname]);

  return null;
};

export default useSEO; 