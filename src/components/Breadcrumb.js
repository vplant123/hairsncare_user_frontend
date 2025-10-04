import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '../utils/seoUtils';
import './Breadcrumb.css';

const Breadcrumb = ({ items = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();

 
  const generateBreadcrumbs = () => {
    if (items.length > 0) return items;

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [{ name: 'Home', url: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;

      const readableName = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        name: readableName,
        url: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = generateBreadcrumbs();

  // Prepare absolute URLs for structured data
  const siteBase = 'https://www.hairsncares.com';
  const breadcrumbForSchema = breadcrumbItems.map(item => ({
    name: item.name,
    url: item.url.startsWith('http') ? item.url : `${siteBase}${item.url}`
  }));

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbForSchema);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {index === breadcrumbItems.length - 1 ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link to={item.url} className="breadcrumb-link">
                    {item.name}
                  </Link>
                  <span className="breadcrumb-separator">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;