import React, { ReactNode } from 'react'

import { Box, Stack, Text } from '@chakra-ui/react'

interface MenuMobileSectionProps {
  title: string
  borderTopWidth?: number
  children: ReactNode
}

export function MenuMobileSection({
  title,
  borderTopWidth,
  children
}: MenuMobileSectionProps) {
  return (
    <Box
      py="1.7rem"
      w="100%"
      borderTopWidth={borderTopWidth}
      borderTopColor="gray.300"
    >
      <Text fontWeight={500} color="gray.400" fontSize="1rem">
        {title}
      </Text>
      <Stack spacing="0 rem" mt="1rem" fontSize="1.1rem">
        {children}
      </Stack>
    </Box>
  )
}
