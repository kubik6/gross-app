// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/store/store";
// import { createVacancy } from "@/slices/vacansySlice";

// import "@/pages/companyCabinet/vacancyForm/vacancyForm.scss";

// interface VacancyFormData {
//   title: string;
//   description: string;
//   salary: string;
//   location: string;
//   companyname: string;
// }

// const VacancyForm: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { loading, error } = useSelector((state: RootState) => state.vacancies);


//   const [formData, setFormData] = useState<VacancyFormData>({
//     title: "",
//     description: "",
//     salary: "",
//     location: "",
//     companyname: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(createVacancy(formData));
//     setFormData({
//       title: "",
//       description: "",
//       salary: "",
//       location: "",
//       companyname: "",
//     });
//   };


//   return (
//     <form onSubmit={handleSubmit} className="vacancy-form">
//       <h2>Create Vacancy</h2>
//       <input
//         type="text"
//         name="companyname"
//         placeholder="Company Name"
//         value={formData.companyname}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={formData.title}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="description"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="salary"
//         placeholder="Salary"
//         value={formData.salary}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={formData.location}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit" disabled={loading}>
//         {loading ? "Creating..." : "Create Vacancy"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// };

// export default VacancyForm;