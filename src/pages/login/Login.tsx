// import React, { useState } from 'react'

// import '@/pages/login/login.scss'

// import { FaGoogle, FaFacebookF, FaLinkedinIn   } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// import { loginCompany } from '@/api/authApi';

// const Login: React.FC = () => {
    
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     const [message, setMessage] = useState("");
//     const [token, setToken] = useState("");
//     const [isSignUp, setIsSignUp] = useState<boolean>(false)

//     const navigate = useNavigate()

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
    
//       const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//           const data = await loginCompany(formData);
//           setToken(data.token);
//           setMessage("Login successful!");
//           navigate('/cabinet-company')
//         } catch (error: any) {
//           setMessage(error.response?.data?.message || "Login failed");
//         }
//       };

//     const handleSignUp = ():void => {
//         setIsSignUp(true)
//     }

//     const handleSignIn = ():void => {
//         setIsSignUp(false)
//     }
    
//     return (
//         <div className='login-main'>
//            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
//             <div className="form-container sign-up-container">
//                 <form onSubmit={handleSubmit}>
//                     <h1>Company Login</h1>
//                     {message && <p>{message}</p>}
//                     <div className="social-container">
//                         <a href="#" className="social"><FaFacebookF /></a>
//                         <a href="#" className="social"><FaGoogle /></a>
//                         <a href="#" className="social"><FaLinkedinIn /></a>
//                     </div>
//                     <span>or use your account</span>
//                     <input 
//                     type="email" 
//                     name='email'
//                     placeholder="Email" 
//                     value={formData.email}
//                     onChange={handleChange}
//                     />
//                     <input 
//                     type="password" 
//                     name='password'
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleChange} 
//                     />
//                     <a href="#">Forgot your password?</a>
//                     <button type="submit">Sign In</button>
//                     <button className="registration" onClick={()=>navigate('/register-company')}>Registration</button>
//                 </form>
//             </div>
//             <div className="form-container sign-in-container">
//                 <form>
//                     <h1>Sign in</h1>
//                     <div className="social-container">
//                         <a href="#" className="social"><FaFacebookF /></a>
//                         <a href="#" className="social"><FaGoogle /></a>
//                         <a href="#" className="social"><FaLinkedinIn /></a>
//                     </div>
//                     <span>or use your account</span>
//                     <input type="email" placeholder="Email" />
//                     <input type="password" placeholder="Password" />
//                     <a href="#">Forgot your password?</a>
//                     <button type="button">Sign In</button>
//                     <button className="registration" onClick={()=>navigate('/register-user')}>Registration</button>
//                 </form>
//             </div>
//             <div className="overlay-container">
//                 <div className="overlay">
//                     <div className="overlay-panel overlay-left">
//                         <h1>Welcome Back!</h1>
//                         <p>To keep connected with us please login with your personal info</p>
//                         <button className="ghost" onClick={handleSignIn}>Sign In</button>
//                     </div>
//                     <div className="overlay-panel overlay-right">
//                         <h1>Hello, Friend!</h1>
//                         <p>Enter your personal details and start journey with us</p>
//                         <button className="ghost" onClick={handleSignUp}>Sign In</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Login