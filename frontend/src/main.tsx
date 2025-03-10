import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Users/>
  </StrictMode>,
)
