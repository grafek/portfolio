import { AppType } from 'next/app';
import { ThemeContextProvider } from '../contexts/Theme';
import '../styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default MyApp;
