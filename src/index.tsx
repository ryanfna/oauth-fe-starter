import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
