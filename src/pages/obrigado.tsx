import Head from 'next/head'
import { useRouter } from 'next/router'
import { SolidButton } from '~/components/Buttons/SolidButton'
import Fade from 'react-reveal/Fade'

import Lottie from 'react-lottie'
import * as animationData from '../assets/success.json'

import translates from '~/locales'

import {
  Box,
  Flex,
  Heading,
  Link,
  Highlight,
  Image,
  Text
} from '@chakra-ui/react'

const Obrigado = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <>
      <Head>
        <title>Rafael Cassaro - Obrigado</title>
      </Head>
      <Box
        backgroundImage={[
          '/images/obrigadoMobile.png',
          '/images/bgMedium.png',
          '/images/bgMedium.png',
          '/images/bgMedium.png',
          '/images/bgMedium.png',
          '/images/bg2.png'
        ]}
        backgroundSize={['cover', 'cover', 'cover', 'cover']}
        backgroundRepeat="no-repeat"
        backgroundPosition={['inherit', 'right', 'inherit']}
        h="100%"
        minH={['110vh', '100vh']}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          h="100%"
          px={['1rem', '2.5rem', '4rem', '5rem', '10rem']}
        >
          {/* <Lottie
            isClickToPauseDisabled
            options={defaultOptions}
            width="100px"
          /> */}

          <Fade>
            <Image
              w={['10rem', '12rem']}
              src="/images/logo.svg"
              pt="4rem"
              cursor="pointer"
              transition="0.1s"
              _active={{ opacity: '0.7' }}
            />
          </Fade>

          <Flex
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            flexDirection="column"
            mb="1rem"
            mt={['4rem', '2.5rem']}
            px={['.5rem', '1.5rem']}
            maxW={1000}
          >
            <Fade delay={100} >
              <Heading>{t.modal.success.title}</Heading>
              <Text color="gray.400" mt="1rem" fontSize={['1.05rem', '1.2rem']}>
                <Highlight
                  query={['SPAM']}
                  styles={{ color: '#e9e9e9', fontWeight: 500 }}
                >
                  {t.modal.success.description}
                </Highlight>
                <br />
                <br />
                <Highlight
                  query={['SPAM', 'instagram']}
                  styles={{ color: '#e9e9e9', fontWeight: 500 }}
                >
                  {t.modal.success.instagram}
                </Highlight>
              </Text>
            </Fade>
          </Flex>

          <Link
            w="100%"
            maxW={[800, 500, 500]}
            href="
              https://www.instagram.com/rafaelcassaro/"
            _hover={{ textDecoration: 'none' }}
          >
            <Fade delay={100}>
              <SolidButton
                fontSize={['1rem', '1.2rem']}
                w="100%"
                px={['2rem', '2.5rem']}
                py={['2rem', '2rem']}
                my=".5rem"
                icon="/images/insta.svg"
              >
                Instagram
              </SolidButton>
            </Fade>
          </Link>
        </Flex>
      </Box>
    </>
  )
}

export default Obrigado
