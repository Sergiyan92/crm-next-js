'use client';
import React, { useEffect } from 'react';
import Header from '../../../components/header';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Companies ({params.id})</Header>
      <span>{new Date().toTimeString()}</span>
    </>
  );
};

export default Page;
