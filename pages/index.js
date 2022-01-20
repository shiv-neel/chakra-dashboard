import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

const Home = () => {
  return <Flex alignItems='center' justifyContent='center'>
    <Heading>Welcome to Generic Blogging Site!</Heading>
    <Link href='./login'><a>Log In</a></Link>
  </Flex>
}

export default Home
