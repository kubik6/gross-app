// import React, { useEffect, useState } from 'react'
// import { getVacancies, getVacancyById  } from '@/slices/vacansySlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/store/store';

// import Loading from '@/components/loading/Loading'
// import Pagination from '@/components/pagination/Pagination';

// import '@/components/vacancyCards/vacancyCards.scss'
// import { FaLocationDot } from "react-icons/fa6";
// import { FaMoneyBillWave } from "react-icons/fa";

// export interface Vacancy {
//   id: number;
//   title: string;
//   companyname: string;
//   location: string;
//   salary: string;
//   description: string;
//   vacancies?: number;
//   deadline?: string;
// }

// interface VacancyCardsProps {
//   vacancies: Vacancy[];
//   selectedVacancy: Vacancy | null;
//   onSelectVacancy: (vacancy: Vacancy) => void;
// }

// const CompanyCards: React.FC<VacancyCardsProps> = ({ vacancies, selectedVacancy, onSelectVacancy }) => {
//   const [activeCardId, setActiveCardId] = useState<number | null>(null);
//   const [currentPage, setCurrentPage] = useState<number | 1>(1);

//   // const dispatch = useDispatch<AppDispatch>();
//   // const { vacancies, listLoading, error, selectedVacancy } = useSelector((state: RootState) => state.vacancies);

//   // useEffect(() => {
//   //   dispatch(getVacancies());
//   // }, [dispatch]);

//   // if (listLoading) {
//   //   return <Loading />;
//   // }

//   // if (error) {
//   //   return <div style={{ color: 'red' }}>Error: {error}</div>;
//   // }

//   return (
//     <div className="job-card-list">
//       {vacancies?.map((vacancy: Vacancy) => (
//         <div
//           key={vacancy?.id}
//           className={`job-card ${activeCardId === vacancy?.id ? 'job-card--active' : ''}`}
//           onClick={() => {
//             setActiveCardId(vacancy?.id || null);
//             // if (vacancy?.id && vacancy.id !== selectedVacancy?.id) {
//             //   dispatch(getVacancyById(vacancy.id));
//             // }
//           }}
//         >
//           <div className="job-card__logo">
//             <span className="job-card__logo-icon">{vacancy?.companyLogo || "IC"}</span>
//           </div>
//           <div className="job-card__details">
//             <h3 className="job-card__title">{vacancy?.title}</h3>
//             <p className="job-card__company">{vacancy?.companyname}</p>
//             <p className="job-card__location"><FaLocationDot /> {vacancy?.location}</p>
//             <p className="job-card__salary"><FaMoneyBillWave /> {vacancy?.salary}</p>
//             <div className="job-card__info">
//               <span className="job-card__vacancy">View: {vacancy?.vacancies || "150"}</span>
//               <span className="job-card__deadline">Deadline: {vacancy?.deadline || "25.05.2025"}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//       <Pagination
//        currentPage={currentPage}
//        totalPages={5}
//        onPageChange={setCurrentPage}
//       />
//     </div>
//   )
// }

// export default CompanyCards

import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaMoneyBillWave } from 'react-icons/fa'
import { BsBuildingsFill } from "react-icons/bs";
import Loading from '@/components/loading/Loading'
// import Pagination from '@/components/pagination/Pagination'
import '@/components/vacancyCards/vacancyCards.scss'

export interface Vacancy {
  id: number;
  title: string;
  companyname: string;
  location: string;
  salary: string;
  description: string;
  vacancies?: number;
  deadline?: string;
}

interface VacancyCardsProps {
  vacancies: Vacancy[];
  selectedVacancy: Vacancy | null;
  onSelectVacancy: (vacancy: Vacancy) => void;
}

const VacancyCards: React.FC<VacancyCardsProps> = ({ vacancies, onSelectVacancy }) => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null)
  // const [currentPage, setCurrentPage] = useState<number>(1)

  // const ITEMS_PER_PAGE = 3
  // const totalPages = Math.ceil(vacancies.length / ITEMS_PER_PAGE)
  // const start = (currentPage - 1) * ITEMS_PER_PAGE
  // const pageVacancies = vacancies.slice(start, start + ITEMS_PER_PAGE)

  if (!vacancies) return <Loading />

  return (
    <div className="job-card-list">
      {vacancies.map((vacancy) => (
        <div
          key={vacancy.id}
          tabIndex={0}
          className={`job-card ${activeCardId === vacancy.id ? 'job-card--active' : ''}`}
          onClick={() => {
            setActiveCardId(vacancy.id)
            onSelectVacancy(vacancy)
          }}
        >
          <div className="job-card__details">
            <h3 className="job-card__title">{vacancy.title}</h3>
            <div className='job-card__info-box'>
              <div>
                <p className="job-card__company"><BsBuildingsFill />{vacancy.companyname}</p>
                <p className="job-card__location"><FaLocationDot /> {vacancy.location}</p>
                <p className="job-card__salary"><FaMoneyBillWave /> {vacancy.salary}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      /> */}
    </div>
  )
}

export default VacancyCards
