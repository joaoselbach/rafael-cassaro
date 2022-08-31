import Head from 'next/head'

import { Box, Icon, Text } from '@chakra-ui/react'
import { Hero } from '~/containers/hero'
import { About } from '~/containers/about'
import { Works } from '~/containers/works'
import { Testimonials } from '~/containers/testimonials'
import { Location } from '~/containers/location'
import { useState } from 'react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { Faq } from '~/containers/faq'
import { Footer } from '~/containers/footer'

export const Home = () => {
  const [showMap, setShowMap] = useState(false)

  return (
    <>
      <Head>
        <title>Rafael Cassaro</title>
      </Head>
      <Box
        as="main"
      >
        <Box
          backgroundImage={[
            '/images/bgM.png',
            '/images/bgMedium.png',
            '/images/bgMedium.png',
            '/images/bgMedium.png',
            '/images/bgMedium.png',
            '/images/bg2.png'
          ]}
          backgroundSize={["contain", "cover", "cover", "cover"]}
          backgroundRepeat="no-repeat"
          backgroundPosition={['inherit', 'right', 'inherit']}
          h="100%"
          minH="100vh"
        >
          <Hero />
          <About />
        </Box>
        <Works />
        <Box maxW={1600} color="#c2b27a" margin="0 auto">
          <Testimonials />
          <Location />
        </Box>
        <Box mt="8rem" w="100%" position="relative">
          <Box
            position="absolute"
            display="flex"
            bottom="0"
            cursor="pointer"
            h={showMap === false ? '100%' : '12%'}
            w="100%"
            mt="-1px"
            justifyContent="center"
            backgroundColor="#000000cf"
            transition="0.2s all ease"
            _hover={{ backgroundColor: '#000000b9' }}
            onClick={() => {
              setShowMap((showMap === true ? false : true))
            }}
          >
            <Text
              fontWeight={500}
              fontSize="1rem"
              alignSelf="center"
              justifySelf="center"
            >
              { showMap ? 'Esconder mapa' : "Mostrar mapa" } <ChevronRightIcon />
            </Text>
          </Box>
          <iframe
            width="100%"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=3145%20NE%209th%20St,%20Fort%20Lauderdale,%20FL%2033304,%20Estados%20Unidos&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Box>
        <Box maxW={1600} margin="0 auto">
          <Faq />
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default Home
