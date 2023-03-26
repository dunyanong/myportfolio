import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className='bg-black w-full'>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp
