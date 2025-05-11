import { Outlet } from 'react-router-dom'

const AuthLayout:React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default AuthLayout
