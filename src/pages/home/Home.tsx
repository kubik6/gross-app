import React, { useEffect } from 'react';
import JobDetail from '@/components/jobDetails/JobDetail';
import VacancyCards from '@/components/vacancyCards/VacancyCards';
import '@/pages/home/home.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { clearSelectedVacancy, getVacancyById } from '@/slices/vacansySlice';
import MainSearch from '@/components/mainSearch/MainSearch';
import { useParams } from 'react-router-dom';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedVacancy } = useSelector((state: RootState) => state.vacancies);
   const { id } = useParams();
  const isMobile = useMediaQuery("(max-width: 769px)");

   useEffect(() => {
    if (id) {
      dispatch(getVacancyById(Number(id)));
    }
  }, [id, dispatch]);

  if (isMobile) {
    return (
      <div className="home-page">
        {selectedVacancy ? (
          <div className="mobile-detail">
            <button
              className="back-button"
              onClick={() => dispatch(clearSelectedVacancy())}
            >
              ← Back
            </button>
            <JobDetail />
          </div>
        ) : (
          <VacancyCards isMobile />
        )}
      </div>
    );
  }

  return (
    <div className="home-page">
      <MainSearch />
      <div className="test">
        <div className="panel cards">
          <VacancyCards />
        </div>
        <div className="panel detail">
          <JobDetail />
        </div>
      </div>
    </div>
  );
};

export default Home;