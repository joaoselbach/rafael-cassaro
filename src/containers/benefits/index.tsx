import { Divider, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TextBoxIcon } from '~/components/TextBoxIcon'
import { TextBoxIconBg } from '~/components/TextBoxIconBg'
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
      pt={['4rem', '5rem', '10rem']}
      pb="8rem"
      px={['1rem', '1.5rem', '3rem']}
      alignItems="center"
    >
      <Text textAlign="center" color="gray.50" fontSize="2rem" letterSpacing="8px">
        {t.benefits.title}
      </Text>

      <Flex
        alignItems="flex-start"
        mt="4rem"
        flexDirection={['column', 'column', 'row']}
        textAlign="center"
        gap={['1rem', "3rem"]}
      >
        <TextBoxIconBg title={t.benefits.exclusive.title}>
          {t.benefits.exclusive.description}
        </TextBoxIconBg>

        <TextBoxIconBg title={t.benefits.design.title}>
          {t.benefits.design.description}
        </TextBoxIconBg>

        <TextBoxIconBg title={t.benefits.realism.title}>
          {t.benefits.realism.description}
        </TextBoxIconBg>
      </Flex>
    </Flex>
  )
}
