'use client';
import { SnackbarProvider } from 'notistack';

interface NotistackProvider {
  children?: React.ReactNode;
}
const NotistackProvider: React.FC<NotistackProvider> = ({ children }) => {
  return (
    <>
      <SnackbarProvider />
      {children}
    </>
  );
};

export default NotistackProvider;
