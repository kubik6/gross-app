import React from 'react'

import '@/admin/admin.scss'
// import VacancyForm from '@/pages/companyCabinet/vacancyForm/VacancyForm'

const Admin: React.FC = () => {
    return (
        <div className='admin-panel'>
            <div className='admin-panel__navigation'>
                <ul>
                    <li>text</li>
                </ul>
            </div>
            <div className='admin-panel__area'>
                {/* <VacancyForm /> */}
            </div>
        </div>
    )
}

export default Admin