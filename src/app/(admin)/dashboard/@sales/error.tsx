'use client';

import React from 'react';
export interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  return <div>Error in slot</div>;
};

export default Error;
