import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../utils/queryClient';

interface QueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider = ({ children }: QueryProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
