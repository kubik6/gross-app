import React from 'react';
import JobDetail from '@/components/jobDetails/JobDetail';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { clearSelectedVacancy } from '@/slices/vacansySlice';

const JobDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mobile-detail">
      <button
        className="back-button"
        onClick={() => {
          dispatch(clearSelectedVacancy());
          window.history.back();
        }}
      >
        ← Back
      </button>
      <JobDetail />
    </div>
  );
};

export default JobDetailPage;