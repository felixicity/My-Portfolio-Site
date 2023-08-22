"use client";
import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleDisplay = () => {
    setIsShown((prevShow) => !prevShow);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(window.innerWidth);
      const windowWidth = window.innerWidth;
      if (windowWidth > 700) {
        setIsShown(true);
      }
    }
  }, []);

  return (
    <>
      {isShown ? (
        <nav className="mobile-nav transition-all duration-3000 fixed lg:menu-nav lg:relative">
          <FaTimes
            className="absolute text-2xl right-0 mt-24 mr-4 cursor-pointer text-white hover:text-gray-800 md:m-8 lg:collapse"
            onClick={toggleDisplay}
          />
          <ul className="text-white flex flex-col py-24 list-none cursor-pointer md:items-center justify-between  lg:flex-row lg:p-0 lg:h-0 lg:w-96 lg:ml-72 lg:text-black">
            <Link href="/">
              <li className="py-4 pl-8 hover:bg-slate-500 transition-all duration-300 delay-75 ease-in lg:p-0 lg:ml-12 lg:hover:border-b-2 lg:border-purple-800 lg:hover:bg-transparent">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="py-4 pl-8 hover:bg-slate-500 transition-all duration-300 delay-75 ease-in lg:p-0 lg:ml-12 lg:hover:border-b-2  lg:border-purple-800 lg:hover:bg-transparent onClick={setIsShown(false)">
                About
              </li>
            </Link>
            <Link href="#project">
              <li className="py-4 pl-8 hover:bg-slate-500 transition-all duration-300 delay-75 ease-in lg:p-0 lg:ml-12 lg:hover:border-b-2  lg:border-purple-800 lg:hover:bg-transparent">
                Projects
              </li>{" "}
            </Link>
          </ul>
        </nav>
      ) : (
        <FaBars
          className="absolute text-2xl left-0 ml-5 cursor-pointer hover:text-gray-500 lg:collapse"
          onClick={toggleDisplay}
        />
      )}
    </>
  );
};

export default Navigation;

// import "./App.css";
// import { validateEmail } from "./utils";

// const PasswordErrorMessage = () => {
//   return (
//     <p className="FieldError">Password should have at least 8 characters</p>
//   );
// };

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [role, setRole] = useState("role");
//   const [errorForPassword,setErrorForPassWord] = useState(false)

//   const getIsFormValid = () => {
//     if (!firstName && !validateEmail(email) && password.value.length < 8) {
//       return false;
//     }
//     return true;
//   };

//   const clearForm = () => {
//     // Implement this function
//     setFirstName("")
//     setLastName("")
//     setEmail("")
//     setPassword({value:"",isTouched:false})
//     setRole("role")

//   };

//   const styles = { backgroundColor: !password.isTouched ? "#ccc" : "transparent" }

//   const handleFocus = () => {
//     setPassword(prevState => {
//       return (
//         {
//           ...prevState,
//           isTouched: true
//         }
//       )
//     });
//   }

//   const handleBlur = () => {
//     if(password.value.length < 8) {
//       setErrorForPassWord(true)
//     }
//   }

//   const handleSubmit = () => {
//     e.preventDefault();
//     alert("Account created!");
//     clearForm();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Sign Up</h2>
//           <div className="Field">
//             <label>
//               First name <sup>*</sup>
//             </label>
//             <input
//               placeholder="First name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)} />
//           </div>
//           <div className="Field">
//             <label>Last name</label>
//             <input
//               placeholder="Last name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)} />
//           </div>
//           <div className="Field">
//             <label>
//               Email address <sup>*</sup>
//             </label>
//             <input placeholder="Email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}/>
//           </div>

//           <div className="Field">
//             <label>
//               Password <sup>*</sup>
//             </label>
//             <input
//               placeholder="PassWord"
//               value={password.value}
//               onChange={(e) => setPassword(e.target.value)}
//               onBlur={handleBlur}
//               onFocus={handleFocus}
//               style={styles}/>
//              {errorForPassword && <PasswordErrorMessage/>}
//           </div>

//           <div className="Field">
//             <label>
//               Role <sup>*</sup>
//             </label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}>
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//           </div>
//           <button type="submit" disabled={!getIsFormValid()}>
//             Create account
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export App;
