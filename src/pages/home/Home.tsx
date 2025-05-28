import React, { useEffect } from 'react';
import JobDetail from '@/components/jobDetails/JobDetail';
import VacancyCards from '@/components/vacancyCards/VacancyCards';
import '@/pages/home/home.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { getVacancyById } from '@/slices/vacansySlice';
import MainSearch from '@/components/mainSearch/MainSearch';
import { useParams } from 'react-router-dom';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
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
        <MainSearch />
        <VacancyCards isMobile />
      </div>
    );
  }

  return (
    <div className="home-page">
      <MainSearch />
      <div className="test">
        <div className="panel cards">
          <VacancyCards basePath="job"/>
        </div>
        <div className="panel detail">
          <JobDetail />
        </div>
      </div>
    </div>
  );
};

export default Home;