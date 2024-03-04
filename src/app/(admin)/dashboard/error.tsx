'use client';

import Button from '@/app/components/button';
import React from 'react';

interface ErrorComponentsProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorComponentsProps) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
