import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"
import tester from "./tester"
import { useAuthProvider } from "../backend/auth"

const Login = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  //const auth = useAuthProvider()

  // authProvider exposes authContext to rest of app

  return (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background={formBackground} p={12} rounded={6} width={350}>
        <Link href='/'>X</Link>
      <Heading mb={6}>Log in</Heading>
      
      <Input placeholder="email" variant="filled" mb={3} type="email" />
      <Input placeholder="********" variant="filled" mb={6} type="password" />
            
      <Button colorScheme='green'>Log in</Button>
      <Button onClick={toggleColorMode} mt={6}>Toggle color mode</Button>
      <Button mt={6}>Sign In With Google</Button>
    </Flex>
  </Flex>
  )
}

export default Login
