import React from 'react'

const CompanyDashboard:React.FC = () => {
  return (
    <div>
        <section className="company-profile">
          <header className="company-profile__header">
            <div className="company-profile__avatar" />
            <h1 className="company-profile__title">Company Name</h1>
          </header>

          <form className="company-profile__form">
            <div className="company-profile__field">
              <label className="company-profile__label">Company Name</label>
              <input
                type="text"
                className="company-profile__input"
                placeholder="Company Name"
              />
            </div>

            <div className="company-profile__field">
              <label className="company-profile__label">Email</label>
              <input
                type="email"
                className="company-profile__input"
                placeholder="you@company.com"
              />
            </div>

            <div className="company-profile__field">
              <label className="company-profile__label">Phone</label>
              <input
                type="tel"
                className="company-profile__input"
                placeholder="+1 555 123 4567"
              />
            </div>

            <div className="company-profile__field company-profile__field--full">
              <label className="company-profile__label">Location</label>
              <textarea
                className="company-profile__textarea"
                placeholder="Description"
              />
            </div>

            <div className="company-profile__actions">
              <button type="button" className="button button--cancel">
                Cancel
              </button>
              <button type="submit" className="button button--save">
                Save Changes
              </button>
            </div>
          </form>
        </section>

        <section className="vacancy-management">
          <h2 className="vacancy-management__title">Vacancy Management</h2>
          <button className="vacancy-management__create-button">
            Create New Vacancy
          </button>
        </section>
    </div>
  )
}

export default CompanyDashboard