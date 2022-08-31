import React, { ReactNode } from 'react'

import { Box, Stack, Text } from '@chakra-ui/react'

interface MenuMobileSectionProps {
  borderTopWidth?: number
  mt?: string
  children: ReactNode
}

export function MenuMobileSection({
  borderTopWidth,
  mt,
  children
}: MenuMobileSectionProps) {
  return (
    <Box
      py="1.7rem"
      w="100%"
      mt={mt}
      justifyContent="center"
      borderTopWidth={borderTopWidth}
      alignItems="center"
      borderTopColor="#383737"
    >

      <Stack spacing="0 rem" mt="1rem" fontSize="1.1rem">
        {children}
      </Stack>
    </Box>
  )
}
