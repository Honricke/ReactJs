import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/index.tsx'
import Moeda from './pages/moeda/index.tsx'
import Layout from './components/layout/index.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/moeda/:id',
        element: <Moeda />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
