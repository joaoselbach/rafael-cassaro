import { Divider, Flex, HStack, Image, Text } from '@chakra-ui/react'
import { TextBoxIcon } from '~/components/TextBoxIcon'


export const About = () => {
  return (
    <Flex
      id="about"
      flexDirection="column"
      justifyContent="center"
      pt={['5rem', '3rem', "6rem"]}
      pb="8rem"
      px={['1rem', '1.5rem', '3rem']}
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        maxW={700}
        textAlign="center"
        lineHeight="2rem"
      >
        <Text color="gray.50" fontSize="2rem" letterSpacing="8px">
          Sobre mim
        </Text>
        <Text
          color="gray.300"
          letterSpacing="1px"
          fontSize="1.2rem"
          fontWeight={300}
          mt="1.8rem"
        >
          Me chamo Rafael Cassaro e viajei o mundo tatuando. Já trabalhei na
          Nova Zelândia, Brasil, Europa e muito outros países. Agora estou no
          Stefano’s Tattoo Studio, um dos melhores estúdios da Flórida.
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        mt="2rem"
        flexDirection={['column', 'column', 'row']}
        textAlign="center"
        gap={['1rem']}
      >
        <TextBoxIcon title="+20 anos de experiência">
          Você está seguro, nas mãos de um profissional que sabe o que faz.
        </TextBoxIcon>
        <Divider
          display={['block', 'block', 'none']}
          orientation="horizontal"
          w="100%"
          h=".5px"
          opacity=".2"
          bgColor="gray.900"
        />
        <Divider
          display={['none', 'none', 'block']}
          orientation="horizontal"
          w="1px"
          opacity=".4"
          h="80px"
          bgColor="gray.500"
        />
        <TextBoxIcon title="+1000 tatuagens realizadas">
          Você está seguro, nas mãos de um profissional que sabe o que faz.
        </TextBoxIcon>
        <Divider
          display={['block', 'block', 'none']}
          orientation="horizontal"
          w="100%"
          h=".5px"
          opacity=".2"
          bgColor="gray.500"
        />
        <Divider
          display={['none', 'none', 'block']}
          orientation="horizontal"
          w="1px"
          opacity=".4"
          h="80px"
          bgColor="gray.500"
        />
        <TextBoxIcon title="Entrega de Qualidade">
          Um resultado que irá te deixar 100% satisfeito, com as expectativas
          superadas
        </TextBoxIcon>
      </Flex>
    </Flex>
  )
}
