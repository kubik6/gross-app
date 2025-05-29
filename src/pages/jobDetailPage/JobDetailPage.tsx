import React from 'react';

// redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { clearSelectedVacancy } from '@/slices/vacansySlice';

// components
import JobDetail from '@/components/jobDetails/JobDetail';

// styles and icons
import '@/pages/jobDetailPage/jobDetailPage.scss'
import { TiArrowBack } from "react-icons/ti";

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
        <TiArrowBack /> Back
      </button>
      <JobDetail />
    </div>
  );
};

export default JobDetailPage;