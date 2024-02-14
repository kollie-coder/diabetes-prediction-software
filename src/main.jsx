import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools"
import { BrowserRouter } from 'react-router-dom'

const styles = {
    global:(props) => ({
        body: {
           bg:mode("#fff", "#000")(props),
           color:mode("#000","#fff")(props)
        }
    })
}

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  
  // 3. extend the theme
  const theme = extendTheme({ config,styles })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <ChakraProvider theme={theme}>
          <App />
    </ChakraProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
)
