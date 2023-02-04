import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import { RouterProvider } from 'react-router5'
import createRouter from "./routes/create-router"
import Router from './routes/router'

const router = createRouter()

router.start(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}>
      <Router />
    </RouterProvider>,
  )
})