import React, { useState } from 'react'

import VacancyCards, { Vacancy } from '@/components/vacancyCards/VacancyCards'
import JobDetail from '@/components/jobDetails/JobDetail'
import MainSearch from '@/components/mainSearch/MainSearch'

import '@/pages/home/home.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const vacancies: Vacancy[] = [
  { id: 1, title: "Frontend Engineer", companyname: "Starship Labs", location: "Baku, Azerbaijan", salary: "₼ 2,500 – 3,500 / month", description: "Build React apps..." },
  { id: 2, title: "Backend Developer", companyname: "CloudWave Inc.", location: "Remote", salary: "USD 4,000 – 5,500 / month", description: "Design APIs..." },
  { id: 3, title: "UI/UX Designer", companyname: "MediCare Solutions", location: "Ganja, Azerbaijan", salary: "₼ 1,800 – 2,800 / month", description: "Create wireframes..." },
  { id: 4, title: "Mobile App Developer", companyname: "Appify Tech", location: "Sumqayıt, Azerbaijan", salary: "₼ 2,200 – 3,200 / month", description: "Develop mobile apps..." },
  { id: 5, title: "DevOps Engineer", companyname: "SecureNet", location: "Baku, Azerbaijan", salary: "₼ 3,000 – 4,500 / month", description: "Manage CI/CD..." },
];

const Home: React.FC = () => {
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

  const isMobile = useMediaQuery("(max-width: 769px)")

  if (isMobile) {
    return (
      <div className="home-page">

        {selectedVacancy ? (
          <div className="mobile-detail">
            <button
              className="back-button"
              onClick={() => setSelectedVacancy(null)}
            >
              ← Back
            </button>
            <JobDetail vacancy={selectedVacancy} />
          </div>
        ) : (
          <>
            <MainSearch />
            <VacancyCards
              vacancies={vacancies}
              selectedVacancy={selectedVacancy}
              onSelectVacancy={setSelectedVacancy}
            />
          </>
        )}
      </div>
    );
  }

  // desktop
  return (
    <div className="home-page">
      <MainSearch />

      <div className="test">
        <div className="panel cards">
          <VacancyCards
            vacancies={vacancies}
            selectedVacancy={selectedVacancy}
            onSelectVacancy={setSelectedVacancy}
          />
        </div>
        <div className="panel detail">
          <JobDetail vacancy={selectedVacancy} />
        </div>
      </div>
    </div>
  );
};

export default Home