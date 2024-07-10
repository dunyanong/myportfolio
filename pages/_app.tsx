import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <div className='bg-neutral-900 w-full pb-56'>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
};

export default MyApp;