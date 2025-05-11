import React from 'react'

import '@/components/mainSearch/mainSearch.scss'

const MainSearch:React.FC = () => {
  return (
    <div className="main-search">
    <div className="main-search__container">
      <div className="main-search__field">
        {/* <label className="main-search__label" htmlFor="job-title">Job title or keyword</label> */}
        <input 
          className="main-search__input" 
          type="text" 
          id="job-title" 
          placeholder="Job title or keyword"
        />
      </div>
      
      <div className="main-search__field">
        {/* <label className="main-search__label" htmlFor="town">Town</label> */}
        <input 
          className="main-search__input" 
          type="text" 
          id="town" 
          placeholder="Town"
        />
      </div>
      
      <div className="main-search__field">
        {/* <label className="main-search__label" htmlFor="industry">Industry</label> */}
        <input 
          className="main-search__input" 
          type="text" 
          id="industry" 
          placeholder="Industry"
        />
      </div>
      
      {/* <div className="main-search__field">
        <input 
          className="main-search__input" 
          type="text" 
          id="salary" 
          placeholder="Salary Range"
        />
      </div> */}
      
      {/* <button className="main-search__button">Search</button> */}
    </div>
  </div>
  )
}

export default MainSearch