// import React, { useState } from 'react';

// const Flashcard = ({ question, options, correctAnswer, onCorrectAnswer }) => {
//   const [isCorrect, setIsCorrect] = useState(null); // Tracks correctness for styling
//   const [animationClass, setAnimationClass] = useState(''); // Controls animation

//   const handleAnswerClick = (answer) => {
//     if (answer === correctAnswer) {
//       setIsCorrect(true);
//       setAnimationClass('animate-move-right'); // Slide left on correct answer
//       setTimeout(() => {
//         setIsCorrect(null);
//         setAnimationClass('');
//         onCorrectAnswer(); // Move to next card
//       }, 700);
//     } else {
//       setIsCorrect(false);
//       setAnimationClass('animate-move-left'); // Slide right on incorrect answer
//       setTimeout(() => {
//         setIsCorrect(null);
//         setAnimationClass('');
//       }, 700);
//     }
//   };

//   return (
//     <div
//       className={`p-8 w-80 h-96 flex flex-col justify-center items-center rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${animationClass} ${isCorrect === true
//         ? 'bg-green-400'
//         : isCorrect === false
//           ? 'bg-red-400'
//           : 'bg-white'
//         }`}
//     >
//       <h2 className="text-xl font-bold mb-6 text-center">{question}</h2>
//       <div className="grid grid-cols-1 gap-4 w-full">
//         {options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleAnswerClick(option)}
//             className="p-2 rounded-lg border text-center bg-blue-100 hover:bg-blue-200"
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Flashcard;

// src/components/Flashcard.jsx
import React from 'react';

const Flashcard = ({ question, options, correctAnswer, onCorrectAnswer }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">{question}</h2>
      <div className="mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onCorrectAnswer(option)}
            className="bg-blue-500 text-white p-2 rounded m-1"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Flashcard;
