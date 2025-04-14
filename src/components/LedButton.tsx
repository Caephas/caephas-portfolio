'use client';
import React from 'react';
import LED from './LED';

const LedButton = ({
  children,
  onClick,
  delay,
}: {
  children: string;
  onClick?: Function;
  delay: number;
}) => {
  return (
    <button
      className="w-fit border border-gray-600 px-3 py-1 flex items-center gap-2 rounded-md"
      onClick={() => onClick}>
      <p className="text-sm">{children}</p>
      <LED delay={delay} />
    </button>
  );
};

export default LedButton;
