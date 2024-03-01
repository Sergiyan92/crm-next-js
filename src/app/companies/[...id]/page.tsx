import React from 'react';
import Header from '../../components/header';

interface PageProps {
  params: { id: string[] };
}

const Page = ({ params }: PageProps) => {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <span>{new Date().toTimeString()}</span>
    </>
  );
};

export default Page;
