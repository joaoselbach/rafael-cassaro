import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import translates from '~/locales'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { gql, useMutation } from '@apollo/client'
import * as yup from 'yup'

import Lottie from 'react-lottie'
import * as animationData from '../assets/success.json'

import { SolidButton } from './Buttons/SolidButton'
import { Input } from './Input'
import { SubmitButton } from './Buttons/SubmitButton'

import { RiUser2Fill } from 'react-icons/ri'

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Toast,
  Flex,
  Text,
  Heading,
  Button
} from '@chakra-ui/react'
import { InputTest } from './InputTest'
import { pt } from '~/locales/pt'

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
  const [statusModal, setStatusModal] = useState('register')
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
        reset()
        setStatusModal('success')
      } else {
        Toast({
          title: 'Erro.',
          description: 'Algo de errado aconteceu',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    }
  }, [data, error])

  const handleCustomer: SubmitHandler<CustomerFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  const handleCustomers: SubmitHandler<CustomerFormData> = async values => {
    // await new Promise(resolve => setTimeout(resolve, 2000))

    // console.log(values)

    await createCustomer({
      variables: {
        ...values
      }
    })
    reset()
  }

  return (
    <>
      <ChakraModal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx=".5rem" bgColor="gray.800">
          <ModalHeader
            justifyContent="center"
            alignItems="center"
            mt="1.5rem"
            textAlign="center"
          >
            {statusModal === 'register' ? (
              <Text>{t.modal.title}</Text>
            ) : (
              <Lottie
                isClickToPauseDisabled
                options={defaultOptions}
                width="150px"
              />
            )}
          </ModalHeader>
          <ModalCloseButton _hover={{ bgColor: 'gray.900' }} />

          {statusModal === 'register' ? (
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
          ) : (
            <Flex
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              flexDirection="column"
              mb="1rem"
              p="1.5rem"
            >
              <Heading>{t.modal.success.title}</Heading>
              <Text color="gray.400" mt="1rem">
                {t.modal.success.description}
              </Text>
              <SolidButton onClick={onClose} mt="2.4rem" w="100%">
                {t.modal.success.button}
              </SolidButton>
            </Flex>
          )}
        </ModalContent>
      </ChakraModal>
    </>
  )
}
