import { Flex, Text } from '@chakra-ui/react'
import WorksCaroussel from '~/components/Caroussel/works'

export const Works = () => {
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
        Trabalhos realizados
      </Text>
      <WorksCaroussel />
    </Flex>
  )
}
