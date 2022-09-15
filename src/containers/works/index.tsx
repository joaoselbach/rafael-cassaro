import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import WorksCaroussel from '~/components/Caroussel/works'
import translates from '~/locales'
import { Benefits } from '../benefits'

export const Works = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex
      id="works"
      flexDirection="column"
      justifyContent="space-around"
      py={['3rem', '4rem']}
      bgColor="gray.900"
      alignItems="center"
    >
      <Text
        color="gray.50"
        fontSize="2rem"
        letterSpacing="8px"
        textAlign="center"
        py={['1rem', '2rem']}
        px={['1rem', '1.5rem', '2.5rem']}
      >
        {t.works.title}
      </Text>
      <WorksCaroussel />
      <Benefits />
    </Flex>
  )
}
