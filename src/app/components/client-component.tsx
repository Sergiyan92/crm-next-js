'use client';

import React from 'react';

interface ClientComponentProps {
  children: React.ReactNode;
}

const ClientComponent = ({ children }: ClientComponentProps) => {
  console.log('Client Component');

  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
};

export default ClientComponent;
