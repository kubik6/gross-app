export interface Vacancy {
  id: number;
  title: string;
  companyname: string;
  location: string;
  salary: string;
  description: string;
  vacancies?: number;
  deadline?: string;
  email: string;
}

export const vacancies: Vacancy[] = [
  { id: 1, title: "Frontend Engineer", companyname: "Starship Labs", location: "Baku, Azerbaijan", salary: "₼ 2,500 – 3,500 / month", description: "Build React apps...", email: "example@gmail.com" },
  { id: 2, title: "Backend Developer", companyname: "CloudWave Inc.", location: "Remote", salary: "USD 4,000 – 5,500 / month", description: "Design APIs...", email: "example@gmail.com" },
  { id: 3, title: "UI/UX Designer", companyname: "MediCare Solutions", location: "Ganja, Azerbaijan", salary: "₼ 1,800 – 2,800 / month", description: "Create wireframes...", email: "example@gmail.com" },
  { id: 4, title: "Mobile App Developer", companyname: "Appify Tech", location: "Sumqayıt, Azerbaijan", salary: "₼ 2,200 – 3,200 / month", description: "Develop mobile apps...", email: "example@gmail.com" },
  { id: 5, title: "DevOps Engineer", companyname: "SecureNet", location: "Baku, Azerbaijan", salary: "₼ 3,000 – 4,500 / month", description: "Manage CI/CD...", email: "example@gmail.com" },
  { id: 6, title: "Frontend Engineer", companyname: "Starship Labs", location: "Baku, Azerbaijan", salary: "₼ 2,500 – 3,500 / month", description: "Build React apps...", email: "example@gmail.com" },
  { id: 7, title: "Backend Developer", companyname: "CloudWave Inc.", location: "Remote", salary: "USD 4,000 – 5,500 / month", description: "Design APIs...", email: "example@gmail.com" },
  { id: 8, title: "UI/UX Designer", companyname: "MediCare Solutions", location: "Ganja, Azerbaijan", salary: "₼ 1,800 – 2,800 / month", description: "Create wireframes...", email: "example@gmail.com" },
  { id: 9, title: "Mobile App Developer", companyname: "Appify Tech", location: "Sumqayıt, Azerbaijan", salary: "₼ 2,200 – 3,200 / month", description: "Develop mobile apps...", email: "example@gmail.com" },
  { id: 10, title: "DevOps Engineer", companyname: "SecureNet", location: "Baku, Azerbaijan", salary: "₼ 3,000 – 4,500 / month", description: "Manage CI/CD...", email: "example@gmail.com" },
];