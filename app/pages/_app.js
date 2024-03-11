// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import "./globals.css";
import { useRouter } from 'next/router';
import {motion,AnimatePresence} from 'framer-motion'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
      <motion.div>
      <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider> 
      </motion.div>
      <motion.div>

      </motion.div>
    
    </AnimatePresence>
  )
}

export default MyApp