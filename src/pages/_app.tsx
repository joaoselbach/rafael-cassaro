import { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import SimpleReactLightbox from 'simple-react-lightbox'

import theme from '../styles/theme'
import { Header } from '~/components/Header'

import '../../node_modules/swiper/swiper-bundle.min.css'
import '../../node_modules/swiper/swiper.min.css'
import 'react-awesome-lightbox/build/style.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '~/lib/apollo'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Header />
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
