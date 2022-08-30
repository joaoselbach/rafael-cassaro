import { Flex, Image, Text, VStack } from '@chakra-ui/react'

export const Location = () => {
  return (
    <Flex
    id="location"
      justifyContent="space-between"
      flexDirection={["column", "column", 'column', "row"]}
      alignItems="center"
      gap="4rem"
      pt="8rem"
      px={['1rem', '1.5rem', '3rem']}
    >
      <Image w={["100%", "60%", '60%', "40%"]} mr={["2.6rem", "2.6rem", "2.6rem", "2.6rem", 0]} src="/images/studio.png" />
      <VStack alignItems="flex-start" flexDirection="column" maxW={900}>
        <Text
          color="gray.50"
          fontSize="2rem"
          letterSpacing="8px"
          textAlign="center"
          py={['1rem', '2rem']}
        >
          Onde eu trabalho?
        </Text>
        <Text
          color="gray.300"
          letterSpacing="1px"
          fontSize="1.2rem"
          fontWeight={300}
          mt="1.8rem"
          maxW={700}
        >
          Eu trabalho no Stefano’s Tattoo Studio, um dos melhores estúdios da
          Flórida. Localização premiada em Fort Lauderdale, bem ao lado da
          praia.
        </Text>

        <Flex pt="2rem" alignItems="flex-start" flexDirection="column">
          <Text fontSize="1.2rem" color="gray.600" letterSpacing="8px">
            Conforto
          </Text>
          <Text
            color="gray.300"
            letterSpacing="1px"
            fontSize="1.2rem"
            fontWeight={300}
          >
            Uma estrutura de primeira classe, feita para te deixar confortável e
            tranquilo
          </Text>
        </Flex>
        <Flex pt="2rem" alignItems="flex-start" flexDirection="column">
          <Text fontSize="1.2rem" color="gray.600" letterSpacing="8px">
            Profissional
          </Text>
          <Text
            color="gray.300"
            letterSpacing="1px"
            fontSize="1.2rem"
            fontWeight={300}
          >
            Apenas os melhores materiais e equipamentos do mercado, porque você
            merece o melhor
          </Text>
        </Flex>
        <Flex pt="2rem" alignItems="flex-start" flexDirection="column">
          <Text fontSize="1.2rem" color="gray.600" letterSpacing="8px">
            Limpo
          </Text>
          <Text
            color="gray.300"
            letterSpacing="1px"
            fontSize="1.2rem"
            fontWeight={300}
          >
            Ambiente 100% esterelizado. Você não precisa se preocupar com sua
            segurança e saúde
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}
