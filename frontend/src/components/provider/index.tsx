import React from 'react';
import QueryProvider from './query';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Provider;
