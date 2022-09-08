import { Divider, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TextBoxIcon } from '~/components/TextBoxIcon'
import translates from '~/locales'

export const Benefits = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex
      id="about"
      flexDirection="column"
      justifyContent="center"
      pt={['5rem', '3rem', '6rem']}
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
          {t.about.title}
        </Text>
        <Text
          color="gray.300"
          letterSpacing="1px"
          fontSize="1.2rem"
          fontWeight={300}
          mt="1.8rem"
        >
          {t.about.description}
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        mt="2rem"
        flexDirection={['column', 'column', 'row']}
        textAlign="center"
        gap={['1rem']}
      >
        <TextBoxIcon title={t.about.years.title}>
          {t.about.years.description}
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
        <TextBoxIcon title={t.about.tatto.title}>
          {t.about.tatto.description}
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
        <TextBoxIcon title={t.about.quality.title}>
          {t.about.quality.description}
        </TextBoxIcon>
      </Flex>
    </Flex>
  )
}
