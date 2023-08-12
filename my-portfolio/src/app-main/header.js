// Header.js
import React from 'react';
//chakra components
import { Button, Flex } from '@chakra-ui/react';


const Header = () => {
    return (
        <header>
            <Flex align="center" justify="between">
                <Flex align="center" justify="">
                    <Flex >
                        <Button>prova</Button>
                        <Button>prova</Button>
                    </Flex>
                </Flex>
                <Flex align="center" justify="">
                    <Flex >
                        <Button>prova</Button>
                        <Button>prova</Button>
                    </Flex>
                </Flex>

            </Flex>
        </header>
    );
}

export default Header;