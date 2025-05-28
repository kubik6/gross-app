import React, { useEffect } from 'react';

import JobDetail from '@/components/jobDetails/JobDetail';
import '@/pages/favorites/favorites.scss';
import VacancyCards from '@/components/vacancyCards/VacancyCards';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useParams } from 'react-router-dom';
import { getVacancyById } from '@/slices/vacansySlice';

const Favorites: React.FC = () => {
  const { bookmarkedIds, selectedVacancy } = useSelector((state: RootState) => state.vacancies);
  const isMobile = useMediaQuery("(max-width: 769px)");
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
    if (id) {
      dispatch(getVacancyById(Number(id)));
    }
  }, [id, dispatch]);

  if (isMobile) {
    return (
      <div className="favorites-page">
        {!selectedVacancy ? (
          <VacancyCards showOnlyBookmarked isMobile />
        ) : (
          <div className="mobile-detail">
            <JobDetail />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h3 className="favorites-page__title">Bookmark</h3>
      {bookmarkedIds.length > 0 ?
        <div className="favorites-page__content">
          <div className="favorites-page__list panel cards">
            <VacancyCards showOnlyBookmarked={true} basePath="favorites"/>
          </div>
          <div className="favorites-page__detail panel detail">
            <JobDetail />
          </div>
        </div>
        :
        <div className="no-bookmarks">You don't have any bookmarks yet.</div>
      }
    </div>
  );
};

export default Favorites;