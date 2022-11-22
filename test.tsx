import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import translates from '~/locales'
import axios from 'axios'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { gql, useMutation } from '@apollo/client'
import * as yup from 'yup'
import * as animationData from '../assets/success.json'
import { pt } from '~/locales/pt'

import { Input } from './Input'
import { RiMessage2Fill, RiUser2Fill } from 'react-icons/ri'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { GiResize } from 'react-icons/gi'

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
import { number } from 'yup/lib/locale'
GiResize

interface ModalProps {
  onOpen: () => void
  onClose: () => void
  isOpen: boolean
  status: any
  message: any
  onValidated: any
}

type CustomerFormData = {
  name: string
  email: string
  phone: string
  idea: string
  size: string
}

const CREATE_CUSTOMER_MUTATION = gql`
  mutation CreateCustomer(
    $name: String!
    $email: String!
    $phone: String!
    $idea: String!
    $size: String!
  ) {
    createCustomer(
      data: {
        name: $name
        email: $email
        phone: $phone
        idea: $idea
        size: $size
      }
    ) {
      name
      createdAt
    }
  }
`

export const Modal = ({
  onOpen,
  isOpen,
  onClose,
  status,
  message,
  onValidated
}: ModalProps) => {
  const [createCustomer, { data, loading, error }] = useMutation(
    CREATE_CUSTOMER_MUTATION
  )

  const router = useRouter()
  const toast = useToast()
  const [fillEmail, setFillEmail] = useState(false)
  const [fillName, setFillName] = useState(false)
  const [fillPhone, setFillPhone] = useState(false)
  const [fillIdea, setFillidea] = useState(false)
  const [fillSize, setFillSize] = useState(false)

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

  let email, name, phone, idea, size
  const submit = () =>
    email &&
    name &&
    phone &&
    idea &&
    size &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
      PHONE: phone.value,
      IDEA: idea.value,
      SIZE: size.value
    })

  // const customerFormSchema = yup.object().shape({
  //   name: yup.string().required(t.errorInput.null.name),
  //   email: yup
  //     .string()
  //     .required(t.errorInput.null.email)
  //     .email(t.errorInput.invalid.email),
  //   phone: yup
  //     .string()
  //     .required(t.errorInput.null.phone)
  //     .matches(
  //       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  //       t.errorInput.invalid.phone
  //     ),
  //   idea: yup.string().required(t.errorInput.null.idea),
  //   size: yup.string().required(t.errorInput.null.size)
  // })

  // const { register, handleSubmit, formState, reset } = useForm({
  //   resolver: yupResolver(customerFormSchema)
  // })

  // const { errors } = formState

  useEffect(() => {
    if (status === 'success') {
      toast({
        title: 'Sucesso',
        description: 'Seu dados foram enviados com sucesso!',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      // reset()
      router.push('/thankyou')
    } else if (status === 'error') {
      toast({
        title: 'Erro.',
        description: 'Algo de errado aconteceu',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }, [status])

  // const handleCustomers: SubmitHandler<CustomerFormData> = async values => {
  //   await createCustomer({
  //     variables: {
  //       ...values
  //     }
  //   })
  //   reset()

  //   let config = {
  //     method: 'post',
  //     url: 'api/contact',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     data: values
  //   }

  //   try {
  //     const response = await axios(config)
  //     console.log(response)
  //     if (response.status == 200) {
  //       reset()
  //       toast({
  //         title: 'Sucesso',
  //         description: 'Seu dados foram enviados com sucesso!',
  //         status: 'success',
  //         duration: 9000,
  //         isClosable: true
  //       })
  //        router.push('/thankyou')
  //     }
  //   } catch (err) {}
  // }

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
            // as="form"
            mb="2.5rem"
            mt="2rem"
            mx="1.5rem"
            gap=".5rem"
            flexDirection="column"
            // onSubmit={handleSubmit(submit)}
          >
            <Input
              name="name"
              type="text"
              ref={node => (name = node)}
              label={t.modal.register.name.label}
              placeholder={t.modal.register.name.placeholder}
              icon={RiUser2Fill}
              // error={errors.name}
              // {...register('name')}
              onBlur={() => setFillName(false)}
              onFocus={() => setFillName(true)}
              stateIcon={fillName}
            />

            <Input
              name="email"
              type="email"
              ref={node => (email = node)}
              label={t.modal.register.email.label}
              placeholder={t.modal.register.email.placeholder}
              icon={FaEnvelope}
              // error={errors.email}
              // {...register('email')}
              onBlur={() => setFillEmail(false)}
              onFocus={() => setFillEmail(true)}
              stateIcon={fillEmail}
            />

            <Input
              name="phone"
              type="phone"
              ref={node => (phone = node)}
              label={t.modal.register.phone.label}
              placeholder={t.modal.register.phone.placeholder}
              icon={FaPhone}
              // error={errors.phone}
              // {...register('phone')}
              onBlur={() => setFillPhone(false)}
              onFocus={() => setFillPhone(true)}
              stateIcon={fillPhone}
            />

            <Input
              name="idea"
              type="text"
              ref={node => (idea = node)}
              label={t.modal.register.idea.label}
              placeholder={t.modal.register.idea.placeholder}
              icon={RiMessage2Fill}
              // error={errors.idea}
              // {...register('idea')}
              onBlur={() => setFillidea(false)}
              onFocus={() => setFillidea(true)}
              stateIcon={fillIdea}
            />

            <Input
              name="size"
              type="text"
              ref={node => (size = node)}
              label={t.modal.register.size.label}
              placeholder={t.modal.register.size.placeholder}
              icon={GiResize}
              // error={errors.size}
              // {...register('size')}
              onBlur={() => setFillSize(false)}
              onFocus={() => setFillSize(true)}
              stateIcon={fillSize}
              maxLength="6"
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
              isLoading={status === 'sending'}
              onClick={submit}
            >
              {t.modal.register.button}
            </Button>
          </Flex>
        </ModalContent>
      </ChakraModal>
    </>
  )
}
