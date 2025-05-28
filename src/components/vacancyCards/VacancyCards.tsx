import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsBuildingsFill } from 'react-icons/bs';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';
import Loading from '@/components/loading/Loading';
import { RootState, AppDispatch } from '@/store/store';
import {
  clearSelectedVacancy,
  getVacancies,
  getVacancyById,
  toggleBookmark,
} from '@/slices/vacansySlice';
import '@/components/vacancyCards/vacancyCards.scss';
import { useNavigate } from 'react-router-dom';

type VacancyCardsProps = {
  showOnlyBookmarked?: boolean;
  isMobile?: boolean;
};

const VacancyCards: React.FC<VacancyCardsProps> = ({ showOnlyBookmarked = false, isMobile = false }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    vacancies,
    selectedVacancy,
    listLoading,
    detailLoading,
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

  const filteredVacancies = showOnlyBookmarked
    ? vacancies.filter((v) => bookmarkedIds.includes(v.id))
    : vacancies;

  if (showOnlyBookmarked && filteredVacancies.length === 0) {
    return <div className="no-bookmarks">You don't have any bookmarks yet.</div>;
  }

   const handleClick = (id: number) => {
    if (isMobile) {
      navigate(`/gross-app/vacancy/${id}`);
    } else {
      dispatch(getVacancyById(id));
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
                <p className="job-card__company"><BsBuildingsFill /> {v.companyname}</p>
              </div>
            </div>
            <div className="job-card__view-box">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleBookmark(v.id));
                }}
              >
                {bookmarkedIds.includes(v.id) ? <FaBookmark /> : <FaRegBookmark />}
              </div>
              <div><GrFormView /> <span>126</span></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VacancyCards;