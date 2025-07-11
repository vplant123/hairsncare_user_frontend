import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { generateBreadcrumbSchema } from '../utils/seoUtils';

const Breadcrumb = ({ items = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Generate breadcrumbs based on current path if no items provided
  const generateBreadcrumbs = () => {
    if (items.length > 0) return items;

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [
      { name: 'Home', url: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable name
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

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

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
                  <a 
                    href={item.url} 
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.url);
                    }}
                    className="breadcrumb-link"
                  >
                    {item.name}
                  </a>
                  <span className="breadcrumb-separator">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <style jsx>{`
        .breadcrumb-nav {
          padding: 10px 0;
          margin-bottom: 20px;
        }
        
        .breadcrumb-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .breadcrumb-item {
          display: flex;
          align-items: center;
        }
        
        .breadcrumb-link {
          color: #005cad;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }
        
        .breadcrumb-link:hover {
          color: #003d7a;
          text-decoration: underline;
        }
        
        .breadcrumb-current {
          color: #666;
          font-size: 14px;
          font-weight: 500;
        }
        
        .breadcrumb-separator {
          margin: 0 8px;
          color: #ccc;
          font-size: 12px;
        }
        
        @media (max-width: 768px) {
          .breadcrumb-list {
            font-size: 12px;
          }
          
          .breadcrumb-separator {
            margin: 0 4px;
          }
        }
      `}</style>
    </>
  );
};

export default Breadcrumb; 