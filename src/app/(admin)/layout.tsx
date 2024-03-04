import React from 'react';
import Sidebar from '../components/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log('rendering');
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default Layout;
