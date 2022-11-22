import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { Icon } from './Icon'

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import translates from '~/locales'
import { useRouter } from 'next/router'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: any
  icon: any
  placeholder: string
  type: string
  maxLength?: any
  stateIcon: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, maxLength, icon, type, stateIcon, error = null, ...rest },
  ref
) => {
  const router = useRouter()
  const { locale } = router
  const { en, es } = translates
  const t = locale === 'es' ? es : en

  return (
    <FormControl isInvalid={!!error} lineHeight="1rem">
      {!!label && (
        <FormLabel color="gray.400" fontSize={[".85rem", ".9rem"]} htmlFor={name} mb="0">
          {label}
        </FormLabel>
      )}

      <Flex
        flex=".25rem"
        py=".25rem"
        position="relative"
        alignItems="center"
        transition="2s"
        width="100%"
      >
        <Icon
          icon={icon}
          position="absolute"
          left="5"
          fontSize="18"
          zIndex="4"
          fill={stateIcon ? 'gold.500' : 'gray.400'}
          transition="fill 0.2s ease 0s"
        />
        <ChakraInput
          name={name}
          type={type}
          required
          bg="gray.700"
          maxLength={maxLength}
          color="gray.50"
          fontSize="1rem"
          fontWeight="500"
          px="1rem"
          h="3.8rem"
          p="1rem"
          pl="12"
          variant="filled"
          boxShadow="2px 2px 4px rgba(0, 0, 0, 0.12)"
          _placeholder={{
            color: 'gray.400',
            fontSize: '14',
            fontWeight: '300'
          }}
          _hover={{
            bgColor: 'gray.700'
          }}
          _focus={{
            bgColor: 'gray.700',
            borderColor: 'gold.500'
          }}
          ref={ref}
          {...rest}
        />
      </Flex>
      {!!error && <FormErrorMessage mt="0">{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
