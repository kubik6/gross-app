import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
// import AuthLayout from '@/layouts/AuthLayout'

import Home from '@/pages/home/Home'
// import Login from '@/pages/login/Login'
// import Admin from '@/admin/Admin'
// import JobDetail from '@/components/jobDetails/JobDetail'
import Faq from '@/components/faq/Faq'

import '@/App.css'
import About from '@/pages/about/About'
// import UserRegister from '@/pages/userRegister/UserRegister'
// import CompanyRegister from '@/pages/companyRegister/CompanyRegister'
// import CompanyCabinet from '@/pages/companyCabinet/CompanyCabinet'

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/faq' element={<Faq />} />
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/vacancy/:id' element={<JobDetail />} /> */}
          <Route path='/*' element={<Home />} />
        </Route>

        {/* Routes without Header and Footer */}
        {/* <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register-user' element={<UserRegister />} />
          <Route path='/register-company' element={<CompanyRegister />} />
          <Route path='/cabinet-company' element={<CompanyCabinet />} />
        </Route> */}
      </Routes>
    </Router>
  )
}

export default App