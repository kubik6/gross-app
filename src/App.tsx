import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

import Home from '@/pages/home/Home'
import Faq from '@/pages/faq/Faq'

import '@/App.css'
import About from '@/pages/about/About'
import Favorites from '@/pages/favorites/Favorites'
import JobDetailPage from './pages/jobDetailPage/JobDetailPage'
import ScrollToTop from './hooks/ScrollToTop'

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
          <Route path="/gross-app/favorites/:id?" element={<Favorites />} />
          <Route path='/gross-app/vacancy/:id' element={<JobDetailPage />} />
          <Route path="/gross-app/job/:id" element={<Home />} />
          {/* Redirect to Home for any unmatched routes */}
          <Route path='/*' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App