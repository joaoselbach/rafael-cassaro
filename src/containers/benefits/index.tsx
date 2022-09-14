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
      <Flex
        alignItems="flex-start"
        mt="1rem"
        flexDirection={['column', 'column', 'row']}
        textAlign="center"
        gap={['1rem', '3rem']}
      >
        <TextBoxIconBg title={t.benefits.first.title}>
          {t.benefits.first.description}
        </TextBoxIconBg>

        <TextBoxIconBg title={t.benefits.sec.title}>
          {t.benefits.sec.description}
        </TextBoxIconBg>

        <TextBoxIconBg title={t.benefits.third.title}>
          {t.benefits.third.description}
        </TextBoxIconBg>
      </Flex>
    </Flex>
  )
}
