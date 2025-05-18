import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
import '@/components/jobDetails/JobDetail.scss';
// import Loading from '@/components/loading/Loading';
import { Vacancy } from '../vacancyCards/VacancyCards';

interface JobDetailProps {
  vacancy: Vacancy | null;
}

const JobDetail: React.FC<JobDetailProps> = ({ vacancy }) => {
  // const { selectedVacancy, detailLoading, error } = useSelector((state: RootState) => state.vacancies);

  // if (detailLoading) {
  //   return <div className="job-detail"><Loading/></div>;
  // }

  // if (error) {
  //   return <div className="job-detail">Error: {error}</div>;
  // }

  // if (!selectedVacancy) {
  //   return <div className="job-detail-empty">Select a vacancy to see details Or REKLAM</div>;
  // }

  if (!vacancy) {
    return <div className="job-detail-empty">Select a vacancy to see details</div>;
  }

  return (
    <div className="job-detail">
      <div className="job-detail__header">
        <div className="job-detail__company">
          <div className="job-detail__info">
            <h2 className="job-detail__name">{vacancy?.companyname}</h2>
          </div>
        </div>
      </div>

      <div className="job-detail__overview">
        <ul className="job-detail__list">
          <li><strong>Role:</strong> {vacancy?.title}</li>
          <li><strong>Location:</strong> {vacancy?.location}</li>
          <li><strong>Salary:</strong> {vacancy?.salary}</li>
        </ul>
      </div>

      <div className="job-detail__summary">
        <h3 className="job-detail__title">Position Summary</h3>
        <p>{vacancy?.description}</p>
      </div>
      <div>
        <button className='job-detail__apply-btn'>Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetail;
