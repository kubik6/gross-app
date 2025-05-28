import React, { } from 'react';

import JobDetail from '@/components/jobDetails/JobDetail';
import '@/pages/favorites/favorites.scss';
import VacancyCards from '@/components/vacancyCards/VacancyCards';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Favorites: React.FC = () => {
    const { bookmarkedIds, selectedVacancy } = useSelector((state: RootState) => state.vacancies);
    const isMobile = useMediaQuery("(max-width: 769px)");

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
            <div className="favorites-page__content">
                <div className="favorites-page__list panel cards">
                    <VacancyCards showOnlyBookmarked={true} />
                </div>
                <div className="favorites-page__detail panel detail">
                    {bookmarkedIds.length > 0 && <JobDetail />}
                </div>
            </div>
        </div>
    );
};

export default Favorites;