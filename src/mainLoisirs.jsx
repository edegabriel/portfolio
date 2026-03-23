import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Loisirs from './Loisirs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loisirs />
  </StrictMode>,
)
