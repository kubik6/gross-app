import React, { useState } from 'react';

// components
// import VacancyForm from '@/pages/companyCabinet/vacancyForm/VacancyForm';

// styles and icons
import '@/pages/companyCabinet/companyCabinet.scss';
import { RxDashboard } from "react-icons/rx";
import { FaRegAddressCard, FaRegEnvelope  } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoLockClosedOutline, IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

// Define tab types
type TabType =
  | 'dashboard'
  | 'vacancies'
  | 'applications'
  | 'messages'
  | 'profile'
  | 'password';

export const CompanyCabinet: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = (): React.ReactNode => {
    switch (activeTab) {
      case 'dashboard':
        return <div>Dashboard Content</div>;
      case 'vacancies':
        // return <VacancyForm />;
      case 'applications':
        return <div>Applications Content</div>;
      case 'messages':
        return <div>Messages Content</div>;
      case 'profile':
        return <div>Profile Content</div>;
      case 'password':
        return <div>Change Password Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className="company-profile-page">
      <aside className="company-profile-page__sidebar sidebar">
        <ul className="sidebar__menu">
          <li
            className={`sidebar__item ${activeTab === 'dashboard' ? 'sidebar__item--active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <RxDashboard /> Dashboard
          </li>
          <li
            className={`sidebar__item ${activeTab === 'vacancies' ? 'sidebar__item--active' : ''}`}
            onClick={() => setActiveTab('vacancies')}
          >
            <FaRegAddressCard /> My Vacancies
          </li>
          <li
            className={`sidebar__item ${activeTab === 'applications' ? 'sidebar__item--active' : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            <FaRegEnvelope /> Applications
          </li>
          <li
            className={`sidebar__item ${activeTab === 'messages' ? 'sidebar__item--active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <LuMessageSquareMore /> Messages
          </li>
        </ul>

        <div className="sidebar__settings">
          <div className="sidebar__item-settings">Settings</div>
          <div
            className={`sidebar__item ${activeTab === 'profile' ? 'sidebar__item--active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <CgProfile /> Profile
          </div>
          <div
            className={`sidebar__item ${activeTab === 'password' ? 'sidebar__item--active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            <IoLockClosedOutline /> Change Password
          </div>
          <div className="sidebar__item">
            <IoLogOutOutline /> Logout
          </div>
        </div>
      </aside>

      <main className="company-profile-page__content">
        {renderContent()}
      </main>
    </div>
  );
};
export default CompanyCabinet;