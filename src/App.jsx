import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import React from 'react'
// layouts and pages
import RootLayout from './layouts/RootLayout'
import Lander from './pages/Lander'
import Login from './pages/Login'
import Top100 from './pages/Top100'
import Popular from './pages/Popular'
import Dashboard from './pages/Dashboard'
import Validate from './pages/Validate'
import Resetpassword from './pages/Resetpassword'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Lander />} />
        <Route path="popular" element={<Popular />} />
        <Route path="top100" element={<Top100 />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="validate" element={<Validate />} />
        <Route path="resetpassword" element={<Resetpassword />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
