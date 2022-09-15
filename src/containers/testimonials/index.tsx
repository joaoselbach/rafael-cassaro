import TestimonialCaroussel from '~/components/Caroussel/testimonial'

import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import translates from '~/locales'
import { useRouter } from 'next/router'
import { SolidButton } from '~/components/Buttons/SolidButton'
import { Modal } from '~/components/Modal'

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
      alignItems="center"
      px={['1rem', '1.5rem', '3rem']}
      pt="2rem"
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
