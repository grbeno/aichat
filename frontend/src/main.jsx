import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Provider from './provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider />
  </StrictMode>,
)