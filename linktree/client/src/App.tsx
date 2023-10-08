import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/home'
import Login from "./pages/login"
import Admin from "./pages/admin"
import Admin_Social from "./pages/admin-social"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/admin/social',
    element: <Admin_Social />
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
