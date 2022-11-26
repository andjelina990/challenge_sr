import React from 'react';

function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      <div className="container-fluid">{children}</div>
    </div>
  );
}

export default PageWrapper;
