import React from 'react'
import { useNavigate } from 'react-router-dom';

// data
import { companies } from '@/data/companies'

// styles
import '@/components/companiesCard/companiesCard.scss'

// Load all logos in the folder as URLs
const logos = import.meta.glob('@/assets/companies/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const getLogoUrl = (filename: string): string => {
  return logos[`/src/assets/companies/${filename}`];
};

const CompaniesCard: React.FC = () => {
  const navigate = useNavigate();

  const handelNavigate = (id: number) => {
    navigate(`/gross-app/company/${id}`);
  };

  return (
    <>
      {companies.map((company) => (
        <div key={company?.id} className="company-cards__card" onClick={() => handelNavigate(company?.id)}>
          <div>
            <img src={getLogoUrl(company?.logo)} alt={company?.name} className="company-cards__logo" />
            <h2 className="company-cards__name">{company?.name}</h2>
          </div>
          <div>
            <p>{!company?.vacancies ? "no vacancies" : `have ${company?.vacancies} vacancies`}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default CompaniesCard