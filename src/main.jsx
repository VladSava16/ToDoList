import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todolist from './components/Todolist'

document.body.classList.add('bg-blue-900');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todolist />
  </StrictMode>,
)
