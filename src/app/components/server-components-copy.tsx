import { headers } from 'next/headers';
import React from 'react';

interface ServerComponentCopyProps {
  children: React.ReactNode;
}

const ServerComponentCopy = ({ children }: ServerComponentCopyProps) => {
  console.log('Server Component Copy');
  console.log(headers());
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
};

export default ServerComponentCopy;
