import { Flex, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { SolidButton } from '~/components/Buttons/SolidButton'
import { Modal } from '~/components/Modal'
import { TextBoxIconBg } from '~/components/TextBoxIconBg'
import translates from '~/locales'

export const Benefits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const url =
    'https://rafaelcassaro.us14.list-manage.com/subscribe/post?u=756d29b82d10ce1242f31a667&amp;id=0b2b283b93&amp;f_id=002385e0f0'

 
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
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </Flex>
  )
}
