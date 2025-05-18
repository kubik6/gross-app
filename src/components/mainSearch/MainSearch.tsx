import React from 'react'

import '@/components/mainSearch/mainSearch.scss'

const MainSearch: React.FC = () => {
  return (
    <div className="main-search">
      <div className="main-search__container">
        <div className="main-search__field">
          <input
            className="main-search__input"
            type="text"
            id="job-title"
            placeholder="Job title or keyword"
          />
        </div>

        <div className="main-search__field main-search__field--small">
          <select className="main-search__select" name="" id="industry" defaultValue={"main"}>
            <option value="main" disabled>
              All categories
            </option>
            <option value="">
              IT
            </option>
            <option value="">
              Sales
            </option>
            <option value="">
              Menecer
            </option>
            <option value="">
              Engineer
            </option>
          </select>
        </div>
        <button className="main-search__button">Search</button>
      </div>
    </div>
  )
}

export default MainSearch