import Head from 'next/head'

import { Box, Image } from '@chakra-ui/react'
import { Hero } from '~/containers/hero'
import { About } from '~/containers/about'
import { Works } from '~/containers/works'
import { Testimonials } from '~/containers/testimonials'
import { Location } from '~/containers/location'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Rafael Cassaro</title>
      </Head>
      <Box as="main">
        <Box
          backgroundImage="/images/bg2.png"
          backgroundRepeat="no-repeat"
          h="100%"
          minH="100vh"
        >
          <Hero />
          <About />
        </Box>
        <Works />
        <Box maxW={1600} margin="0 auto">
          <Testimonials />
          <Location />
        </Box>
        <Image mt="8rem" src="/images/maps.png" />
      </Box>
    </>
  )
}

export default Home
