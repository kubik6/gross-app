import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import {
  clearSelectedVacancy,
  getVacancies,
  getVacancyById,
  toggleBookmark,
} from '@/slices/vacansySlice';

// components
import Loading from '@/components/loading/Loading';

// styles
import '@/components/vacancyCards/vacancyCards.scss';
import { BsBuildingsFill } from 'react-icons/bs';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';

// types
type VacancyCardsProps = {
  showOnlyBookmarked?: boolean;
  isMobile?: boolean;
  basePath?: 'job' | 'favorites' | 'recommendations';
};

const VacancyCards: React.FC<VacancyCardsProps> = ({ showOnlyBookmarked = false, isMobile = false, basePath = '' }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    vacancies,
    selectedVacancy,
    listLoading,
    error,
    bookmarkedIds,
  } = useSelector((state: RootState) => state.vacancies);

  useEffect(() => {
    dispatch(getVacancies());

    return () => {
      dispatch(clearSelectedVacancy());
    };

  }, [dispatch]);



  if (listLoading) return <Loading />;
  if (error) return <div className="error">{error}</div>;

  // Filter vacancies based on bookmark or all
  let filteredVacancies = showOnlyBookmarked
    ? vacancies.filter((v) => bookmarkedIds.includes(v.id))
    : vacancies;

  // If rendering recommendations, limit to first 3
  if (basePath === 'recommendations') {
    filteredVacancies = filteredVacancies.slice(0, 3);
  }

  const handleClick = (id: number) => {
    if (isMobile) {
      navigate(`/gross-app/vacancy/${id}`);
    } else {
      dispatch(getVacancyById(id));
      navigate(`/gross-app/${basePath}/${id}`, { replace: true });
    }
  };



  return (
    <div className="job-card-list">
      {filteredVacancies.map((v) => (
        <div
          key={v.id}
          tabIndex={0}
          className={`job-card ${selectedVacancy?.id === v.id ? 'job-card--active' : ''}`}
          onClick={() => handleClick(v.id)}
        >
          <div className="job-card__details">
            <div className="job-card__left-box">
              <div className="job-card__logo-box">
                <span className="job-card__logo-icon">IC</span>
              </div>
              <div className="job-card__info-box">
                <h3 className="job-card__title">{v.title}</h3>
                <p className="job-card__company"><BsBuildingsFill /> {v.companyname} <span>5 vacancy</span></p>
              </div>
            </div>
            <div className="job-card__view-box">
              <div className="job-card__time-box">
                <p>10.05.2025</p>
                <p>12.09.2025</p>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleBookmark(v.id));
                }}
                className="job-card__bookmark-box"
              >
                <span className="job-card__helper-view">This is a helper message</span>
                {bookmarkedIds.includes(v.id) ? <FaBookmark /> : <FaRegBookmark />}
                <div><GrFormView /> <span>126</span></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VacancyCards;