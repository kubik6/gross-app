// src/pages/companyDetail/CompanyDetail.tsx
import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// data
import { companies, Company } from '@/data/companies';

// styles
import '@/pages/companyDetail/companyDetail.scss';
import VacancyCards from '@/components/vacancyCards/VacancyCards';

// Load all logos in the folder as URLs (same as CompaniesCard)
const logos = import.meta.glob('@/assets/companies/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const getLogoUrl = (filename: string): string => {
  return logos[`/src/assets/companies/${filename}`];
};

const CompanyDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  // Convert the URL `id` param to a number (or NaN if undefined/invalid)
  const companyId = useMemo(() => {
    if (!id) return NaN;
    const parsed = Number(id);
    return isNaN(parsed) ? NaN : parsed;
  }, [id]);

  // Find the matching company by ID (or undefined if not found)
  const company: Company | undefined = useMemo(() => {
    return companies.find((c) => c.id === companyId);
  }, [companyId]);

  const handleBack = () => {
    navigate(-1);
  };

  // If no valid companyId or no matching company, show a “Not Found” message
  if (isNaN(companyId) || !company) {
    return (
      <div className="company-detail">
        <button className="company-detail__back" onClick={handleBack}>
          ← Back
        </button>
        <div className="company-detail__notfound">
          <h2>Company not found</h2>
          <p>The company you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="company-detail">
      <button className="company-detail__back" onClick={handleBack}>
        ← Back
      </button>

      <div className="company-detail__header">
        <img
          src={getLogoUrl(company.logo)}
          alt={`${company.name} logo`}
          className="company-detail__logo"
        />
        <h1 className="company-detail__name">{company.name}</h1>
      </div>

      <div className="company-detail__info">
        <section className="company-detail__section">
          <h3>Description</h3>
          <p>{company.description}</p>
        </section>

        <section className="company-detail__section">
          <h3>Website</h3>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="company-detail__link"
          >
            {company.website}
          </a>
        </section>

        <section className="company-detail__section">
          <h3>Location</h3>
          <p>{company.location}</p>
        </section>

        <section className="company-detail__section">
          <h3>Industry</h3>
          <p>{company.industry}</p>
        </section>

        <section className="company-detail__section">
          <h3>Vacancies</h3>
          <p>
            {!company?.vacancies ? "no vacancies" : `have ${company?.vacancies} vacancies`}
          </p>
        </section>
      </div>
      <div className="company-detail__vacancies">
        <VacancyCards />
      </div>
    </div>
  );
};

export default CompanyDetail;