import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#0d0e10',
      800: '#0F1013',
      700: '#1B1F23',
      600: '#575759',
      500: '#828282',
      400: '#a1a1a1',
      300: '#D9D9D9',
      50: '#fff'
    },
    gold: {
      500: '#C2AD60'
    },
  },
  fonts: {
    heading: 'Dosis',
    body: 'Dosis'
  },
  styles: {
    global: {
      body: {
        bg: '#101114',
        color: 'gray.50'
      },
      html: {
        scrollBehavior: 'smooth',
        webkitFontSmoothing: 'antialiased',

        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          background: '#2b2b2b'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#C2AD60',
          borderRadius: '24px'
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#c2b27a'
        }
      }
    }
  }
})

export default theme
