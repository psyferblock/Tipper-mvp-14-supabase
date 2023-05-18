// "use client"
// import React from 'react'
// import { ChevronLeft, ChevronRight } from "react-feather";


// function LeftRightButtons({current,slides}) {

//     const previous = () => {
//         setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
//       };
//       const next = () => {
//         setCurrent((current) => (current === slides.length -1 ? 0 : current + 1));
//       };
//   return (
//     <>
//      <div className="absolute inset-1 flex items-center justify-between p-4">
//           <button
//             onClick={previous}
//             className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <button
//             onClick={next}
//             className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>
//     </>
//   )
// }

// export default LeftRightButtons