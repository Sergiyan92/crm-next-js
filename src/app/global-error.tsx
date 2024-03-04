'use client';

import React from 'react';

export interface GlobalErrorPageProps {}

const GlobalErrorPage = ({}: GlobalErrorPageProps) => {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
};

export default GlobalErrorPage;
