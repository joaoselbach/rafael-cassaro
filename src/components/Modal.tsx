import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import translates from '~/locales'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { gql, useMutation } from '@apollo/client'
import * as yup from 'yup'

import Lottie from 'react-lottie'
import * as animationData from '../assets/success.json'

import { Input } from './Input'
import { RiUser2Fill } from 'react-icons/ri'

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Flex,
  Text,
  Button,
  useToast
} from '@chakra-ui/react'
import { pt } from '~/locales/pt'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

interface ModalProps {
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
}

type CustomerFormData = {
  name: string
  email: string
  phone: string
}

const CREATE_CUSTOMER_MUTATION = gql`
  mutation CreateCustomer($name: String!, $email: String!, $phone: String!) {
    createCustomer(data: { name: $name, email: $email, phone: $phone }) {
      name
      createdAt
    }
  }
`

export const Modal = ({ onOpen, isOpen, onClose }: ModalProps) => {
  const [createCustomer, { data, loading, error }] = useMutation(
    CREATE_CUSTOMER_MUTATION
  )

  const router = useRouter()
  const toast = useToast()
  const [fillEmail, setFillEmail] = useState(false)
  const [fillName, setFillName] = useState(false)
  const [fillPhone, setFillPhone] = useState(false)

  const { locale } = router
  const { en, es } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const customerFormSchema = yup.object().shape({
    name: yup.string().required(t.errorInput.null.name),
    email: yup
      .string()
      .required(t.errorInput.null.email)
      .email(t.errorInput.invalid.email),
    phone: yup
      .string()
      .required(t.errorInput.null.phone)
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t.errorInput.invalid.phone
      )
  })

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(customerFormSchema)
  })

  const { errors } = formState

  useEffect(() => {
    if (data?.createCustomer) {
      if (data.createCustomer.createdAt) {
        toast({
          title: 'Sucesso',
          description: 'Seu dados foram enviados com sucesso!',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        reset()
        router.push('/thankyou')
      } else {
        toast({
          title: 'Erro.',
          description: 'Algo de errado aconteceu',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    }
  }, [data, error])

  const handleCustomers: SubmitHandler<CustomerFormData> = async values => {
    // await createCustomer({
    //   variables: {
    //     ...values
    //   }
    // })
    reset()
  }

  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx=".5rem" bgColor="gray.800">
          <ModalHeader
            justifyContent="center"
            alignItems="center"
            mt="1.8rem"
            textAlign="center"
          >
            <Text fontSize="1.15rem">{t.modal.title}</Text>
          </ModalHeader>
          <ModalCloseButton _hover={{ bgColor: 'gray.900' }} />

          <Flex
            as="form"
            mb="2.5rem"
            mt="2rem"
            mx="1.5rem"
            gap=".5rem"
            flexDirection="column"
            onSubmit={handleSubmit(handleCustomers)}
          >
            <Input
              name="name"
              type="text"
              label={t.modal.register.name.label}
              placeholder={t.modal.register.name.placeholder}
              icon={RiUser2Fill}
              error={errors.name}
              {...register('name')}
              onBlur={() => setFillName(false)}
              onFocus={() => setFillName(true)}
              stateIcon={fillName}
            />

            <Input
              name="email"
              type="email"
              label={t.modal.register.email.label}
              placeholder={t.modal.register.email.placeholder}
              icon={RiUser2Fill}
              error={errors.email}
              {...register('email')}
              onBlur={() => setFillEmail(false)}
              onFocus={() => setFillEmail(true)}
              stateIcon={fillEmail}
            />

            <Input
              name="phone"
              type="phone"
              label={t.modal.register.phone.label}
              placeholder={t.modal.register.phone.placeholder}
              icon={RiUser2Fill}
              error={errors.phone}
              {...register('phone')}
              onBlur={() => setFillPhone(false)}
              onFocus={() => setFillPhone(true)}
              stateIcon={fillPhone}
            />
            <Button
              type="submit"
              mt="1rem"
              bgColor="gold.500"
              fontSize="18"
              px="7"
              py="7"
              _hover={{ filter: 'brightness(92%)' }}
              _active={{ filter: 'brightness(86%)' }}
              _focus={{ border: 'none' }}
              isLoading={formState.isSubmitting}
            >
              {t.modal.register.button}
            </Button>
          </Flex>
        </ModalContent>
      </ChakraModal>
    </>
  )
}
