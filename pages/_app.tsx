import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <link rel="icon" href="/images/my-pictures/purple.png" sizes="any" />
      <div className='bg-neutral-900 w-full pb-56'>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
};

// export const metadata = {
//   title: "Dun Yan",
//   description: "Engineer Portfolio",
//   icons: {
//     icon: "/images/my-pictures/purple.png",
//   },
// };

export default MyApp;