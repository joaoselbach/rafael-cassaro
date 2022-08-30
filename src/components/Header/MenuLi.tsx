import { Icon, Image, Link, MenuItem } from '@chakra-ui/react'

type MenuItemProps = {
  icon: any
  onClick?: any
}

const MenuLi = ({ icon, onClick, ...rest }: MenuItemProps) => {
  return (
    <MenuItem
      display="flex"
      alignItems="center"
      justifyContent="center"
      py="1rem"
      px=".5rem"
      gap=".75rem"
      borderRadius="5"
      fontSize="1.10rem"
      fontWeight="semibold"
      transition="0.2s all ease"
      _focusWithin={{ bgColor: 'gray.800' }}
      _focus={{ boxShadow: 'none' }}
      _hover={{
        bgColor: 'gray.800',
        boxShadow: '0px 5px 4px -1px rgba(0, 0, 0, 0.1)'
      }}
      onClick={onClick}
      {...rest}
    >
      <Image src={icon} fontSize="20" borderRadius="50%" />
    </MenuItem>
  )
}

export default MenuLi
