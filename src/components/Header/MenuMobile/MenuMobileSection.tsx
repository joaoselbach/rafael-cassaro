import React, { ReactNode } from 'react'

import { Box, Stack, Text } from '@chakra-ui/react'

interface MenuMobileSectionProps {
  borderTopWidth?: number
  children: ReactNode
}

export function MenuMobileSection({
  borderTopWidth,
  children
}: MenuMobileSectionProps) {
  return (
    <Box
      py="1.7rem"
      w="100%"
      justifyContent="center"
      borderTopWidth={borderTopWidth}
      alignItems="center"
      borderTopColor="gray.700"
    >

      <Stack spacing="0 rem" mt="1rem" fontSize="1.1rem">
        {children}
      </Stack>
    </Box>
  )
}
