import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// helpers
import MainLayout from '@/layouts/MainLayout'
import ScrollToTop from '@/hooks/ScrollToTop'

// pages
import Home from '@/pages/home/Home'
import Faq from '@/pages/faq/Faq'
import About from '@/pages/about/About'
import Favorites from '@/pages/favorites/Favorites'
import JobDetailPage from '@/pages/jobDetailPage/JobDetailPage'
import Companies from '@/pages/companies/Companies'
import CreateCv from '@/pages/createCv/CreateCv'
import CompanyDetail from '@/pages/companyDetail/CompanyDetail'

// styles
import '@/App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/gross-app/' element={<Home />} />
          <Route path='/gross-app/faq' element={<Faq />} />
          <Route path='/gross-app/about' element={<About />} />
          <Route path='/gross-app/favorites' element={<Favorites />} />
          <Route path='/gross-app/companies' element={<Companies />} />
          <Route path='/gross-app/create-cv' element={<CreateCv />} />
          <Route path="/gross-app/favorites/:id?" element={<Favorites />} />
          <Route path='/gross-app/vacancy/:id' element={<JobDetailPage />} />
          <Route path="/gross-app/job/:id" element={<Home />} />
          <Route path="/gross-app/company/:id" element={<CompanyDetail />} />
          <Route path='/*' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App