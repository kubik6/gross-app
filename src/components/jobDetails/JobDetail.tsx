import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '@/components/jobDetails/JobDetail.scss';
import { AppDispatch, RootState } from '@/store/store';
import { useParams } from 'react-router-dom';
import { clearSelectedVacancy, getVacancyById, showEmail } from '@/slices/vacansySlice';
import Loading from '@/components/loading/Loading';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const vacancy = useSelector((state: RootState) => state.vacancies.selectedVacancy);
  const emailShownIds = useSelector((state: RootState) => state.vacancies.emailShownIds);
  const detailLoading = useSelector((state: RootState) => state.vacancies.detailLoading);
  // const [showEmail, setShowEmail] = useState(false);


  const isEmailShown = vacancy ? emailShownIds.includes(vacancy.id) : false;

  const handleShowEmail = () => {
    if (vacancy) dispatch(showEmail(vacancy.id));
  };

  useEffect(() => {
    if (id) dispatch(getVacancyById(Number(id)));

    return () => {
      dispatch(clearSelectedVacancy());
    };
  }, [dispatch, id]);

  if (detailLoading) return <Loading />;
  if (!vacancy) return <div className="job-detail-empty">Select a vacancy to see details</div>;

  return (
    <div className="job-detail">
      <header className="job-detail__header">
        <div className="job-detail__company">
          <h2 className="job-detail__name">{vacancy.companyname}</h2>
          {isEmailShown ? (
            <span className='job-detail__apply-email'>{vacancy.email}</span>
          ) : (
            <button className='job-detail__apply-btn' onClick={handleShowEmail}>Apply Now</button>
          )}
        </div>
      </header>
      <section className="job-detail__overview">
        <ul className="job-detail__list">
          <li><strong>Role:</strong> {vacancy.title}</li>
          <li><strong>Location:</strong> {vacancy.location}</li>
          <li><strong>Salary:</strong> {vacancy.salary}</li>
        </ul>
      </section>
      <section className="job-detail__summary">
        <h3 className="job-detail__title">Position Summary</h3>
        <p>{vacancy.description}</p>
      </section>
    </div>
  );
};
export default JobDetail;