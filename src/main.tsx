import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routes/router'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
