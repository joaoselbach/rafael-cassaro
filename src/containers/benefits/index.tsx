import { Flex, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SolidButton } from '~/components/Buttons/SolidButton'
import { Modal } from '~/components/Modal'
import { TextBoxIconBg } from '~/components/TextBoxIconBg'
import translates from '~/locales'

export const Benefits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex
      id="about"
      flexDirection="column"
      justifyContent="center"
      pt={['2rem', '2rem', '4rem']}
      pb="4rem"
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
      <SolidButton w={['100%', '80%', '45%']} mt="4rem" onClick={onOpen}>
        {t.buttonContact}
      </SolidButton>
      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Flex>
  )
}
