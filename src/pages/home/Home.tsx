import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// redux
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { getVacancyById } from '@/slices/vacansySlice';

// components
import MainSearch from '@/components/mainSearch/MainSearch';
import JobDetail from '@/components/jobDetails/JobDetail';
import VacancyCards from '@/components/vacancyCards/VacancyCards';
import { MarqueeWidget } from '@/components/marqueeWidget/MarqueeWidget';

// styles
import '@/pages/home/home.scss';

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
        <div>
          <MarqueeWidget />
        </div>
        <MainSearch />
        <VacancyCards isMobile />
      </div>
    );
  }

  return (
    <div className="home-page">
      <div>
        <MarqueeWidget />
      </div>
      <MainSearch />
      <div className="test">
        <div className="panel cards">
          <VacancyCards basePath="job" />
        </div>
        <div className="panel detail">
          <JobDetail />
          <div className='recommendations'>
            <h2>Recommendations</h2>
            <VacancyCards basePath="recommendations" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;