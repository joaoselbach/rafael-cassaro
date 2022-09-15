import { Flex, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Accordion } from '~/components/Accordion'
import translates from '~/locales'

export const Faq = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex
      id="faq"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pt="6rem"
      px={['1rem', '1.5rem', '2.5rem']}
    >
      <Text
        color="gray.50"
        fontSize="2rem"
        letterSpacing="8px"
        textAlign="center"
        py={['1rem', '2rem']}
        px={['1rem', '1.5rem', '2.5rem']}
      >
        {t.faq.title}
      </Text>
      <VStack mt="1rem" px="0">
        <Accordion title={t.faq.whatHappen.title}>
          {t.faq.whatHappen.description}
        </Accordion>
        <Accordion title={t.faq.price.title}>
          {t.faq.price.description}
        </Accordion>
        <Accordion title={t.faq.schedule.title}>
          {t.faq.schedule.description}
        </Accordion>
        <Accordion title={t.faq.day.title}>
          {t.faq.day.description}
        </Accordion>
        <Accordion title={t.faq.idea.title}>
          {t.faq.idea.description}
        </Accordion>
        <Accordion title={t.faq.badExperience.title}>
          {t.faq.badExperience.description}
        </Accordion>
      </VStack>
    </Flex>
  )
}
