import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import LoginPage from './components/Login.tsx'
import SignupPage from './components/Signup.tsx'
import Dashboard from './components/Dashboard/Dashboard.tsx'
import DashboardHome from './components/Dashboard/DashboardHome.tsx'
import Profile from './components/Dashboard/Profile.tsx'
import Settings from './components/Dashboard/Settings.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<Dashboard />} >
        <Route index element={<DashboardHome />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
