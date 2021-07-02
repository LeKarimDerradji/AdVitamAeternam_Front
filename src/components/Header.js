import { useContext } from 'react';
import {Container, Heading } from '@chakra-ui/react'
import { Web3Context} from "web3-hooks";

import React from 'react'

const Header = () => {
    const [web3State, login] = useContext(Web3Context);
    
    return (
        <>
        <Container maxWidth='100%' bg='teal' textAlign='center' pt="28" pb="10">
            <Heading fontSize='9xl'>Ad vitam æternam</Heading>
        </Container>
        </>
    )
}

export default Header
