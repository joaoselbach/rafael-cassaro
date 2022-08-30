import TestimonialCaroussel from '~/components/Caroussel/testimonial'

import {
  Flex,
  Text,
} from '@chakra-ui/react'


export const Testimonials = () => {
  return (
    <Flex
      id="about"
      flexDirection="column"
      justifyContent="center"
      pt="8rem"
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
        Our clients kind words
      </Text>
      <TestimonialCaroussel />
    </Flex>
  )
}
