import TestimonialCaroussel from '~/components/Caroussel/testimonial'

import { Flex, Text } from '@chakra-ui/react'
import translates from '~/locales'
import { useRouter } from 'next/router'

export const Testimonials = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex
      id="about"
      flexDirection="column"
      justifyContent="center"
      pt="6rem"
      alignItems="center"
      px={['1rem', '1.5rem', '3rem']}
    >
      <Text
        color="gray.50"
        fontSize="2rem"
        letterSpacing="8px"
        textAlign="center"
        py={['1rem', '2rem']}
        px={['1rem', '1.5rem', '2.5rem']}
      >
        {t.testimonials.title}
      </Text>
      <TestimonialCaroussel />
    </Flex>
  )
}
