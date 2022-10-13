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
import Script from 'next/script'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/ns.html?id=GTM-WZ978RD`}
      />
      <Script strategy="lazyOnload">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZ978RD');`}</Script>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <SimpleReactLightbox>
            <Component {...pageProps} />
          </SimpleReactLightbox>
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
