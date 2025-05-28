import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

import Home from '@/pages/home/Home'
import Faq from '@/pages/faq/Faq'

import '@/App.css'
import About from '@/pages/about/About'
import Favorites from '@/pages/favorites/Favorites'
import JobDetail from './components/jobDetails/JobDetail'
import JobDetailPage from './pages/jobDetailPage/JobDetailPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/gross-app/' element={<Home />} />
          <Route path='/gross-app/faq' element={<Faq />} />
          <Route path='/gross-app/about' element={<About/>}/>
          <Route path='/gross-app/favorites' element={<Favorites />} />
          <Route path='/gross-app/vacancy/:id' element={<JobDetailPage />} />
          {/* Redirect to Home for any unmatched routes */}
          <Route path='/*' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App