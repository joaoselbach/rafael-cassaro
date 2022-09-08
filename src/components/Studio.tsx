import { Image } from '@chakra-ui/react'

interface StudioProps {
  src: string
}

export const Studio = ({ src }: StudioProps) => {
  return <Image src={src} w={['100%', '60%', '60%', '80%']} />
}
