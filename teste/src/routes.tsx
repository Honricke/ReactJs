import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Sobre from './pages/sobre'
import Contato from './pages/contato'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/sobre/:id',
        element: <Sobre />
    },
    {
        path: '/contato',
        element: <Contato />
    }
])

export { router }