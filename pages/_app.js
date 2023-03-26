import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp
