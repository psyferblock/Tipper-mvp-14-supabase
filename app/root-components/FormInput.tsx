// "use client";

// import React, { useState } from "react";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";


// const FormInput = (props) => {
//   const [focused, setFocused] = useState(false);

//   const { label, errorMessage, onChange, id, type,...inputProps } = props;
//   //TO OPEN AND CLOSE THE EYE
//   const [open, setOpen] = useState(false);

//   const handleFocus = (e) => {
//     setFocused(true);
//   };
//   // handle toggle
//   const toggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <h1 className="ml-4 font-bold"> {label} *</h1>

//       <div className={`text-grey-500 relative m-3 mb-3 max-w-md`}>
//         <input
//           {...inputProps}
//           className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 "
//           onChange={()=>onChange}
//           onBlur={handleFocus}
//           onFocus={() =>
//             inputProps.name === "confirmPassword" && setFocused(true)
//           }
//           focused={focused.toString()}
//           type={open === false ? {type} : "text"}

//         />

//         <label
//           htmlFor={label}
//           className=" text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600 "
//         >
//           {label}
//         </label>
//         {type==="password" && (
//           <div className="absolute right-5 top-4 text-2xl">
//             {open === false ? (
//               <AiFillEye onClick={toggle} />
//             ) : (
//               <AiFillEyeInvisible onClick={toggle} />
//             )}
//           </div>
//         )}
//       </div>
//       <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
//     {errorMessage}
//   </span>
//     </div>
//   );
// };

// export default FormInput;
