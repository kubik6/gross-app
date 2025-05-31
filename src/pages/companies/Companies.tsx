import React from 'react'

// components
import CompaniesCard from '@/components/companiesCard/CompaniesCard'

// styles
import '@/pages/companies/companies.scss'

const Companies: React.FC = () => {
    return (
        <div className='companies-page'>
            <h1 className='companies-page__title'>Companies</h1>
            <div className='companies-page__cards'>
                <CompaniesCard />
            </div>
        </div>
    )
}

export default Companies