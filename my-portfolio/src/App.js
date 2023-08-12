import './App.css';

import { ChakraProvider,extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

import Header from './app-main/Header';
import Main from './app-main/Main';
import Footer from './app-main/Footer';

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
    return (
        <ChakraProvider theme={theme}>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        </ChakraProvider> 
    );
}

export default App;
