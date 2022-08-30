import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import SimpleReactLightbox from 'simple-react-lightbox'

import theme from '../styles/theme'
import { Header } from '~/components/Header'

import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'
import 'react-awesome-lightbox/build/style.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>

      <Header />
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ChakraProvider>
  )
}

export default MyApp
