// import React, { useState } from 'react';
// import Flashcard from './Flashcard';

// const GamePage = () => {
//   const flashcards = [
//     {
//       question: "What is the capital of France?",
//       options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
//       correctAnswer: 'Paris',
//     },
//     {
//       question: "What is the capital of India?",
//       options: ['Berlin', 'Madrid', 'Delhi', 'Rome'],
//       correctAnswer: 'Delhi',
//     },
//     {
//       question: "What is the capital of Japan?",
//       options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'],
//       correctAnswer: 'Tokyo',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [points, setPoints] = useState(0);

//   const handleNextCard = (selectedOption) => {
//     // Adjust points based on correctness
//     if (selectedOption === flashcards[currentIndex].correctAnswer) {
//       setPoints(points + 4); // Add 4 points for a correct answer
//     } else {
//       setPoints(points - 1); // Deduct 1 point for an incorrect answer
//     }

//     // Proceed to next card or finish
//     if (currentIndex < flashcards.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       alert("You've completed all flashcards!");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center overflow-hidden justify-center h-screen bg-gradient-to-t from-gray-300 to-slate-800">
//       <div className="text-white mb-4 top-5 left-0 right-6">Points: {points}</div>
//       <h1 className="text-4xl font-semibold text-white mb-8">
//         Test Your Knowledge
//       </h1>

//       <Flashcard
//         key={currentIndex} // Reset animation on card change
//         question={flashcards[currentIndex].question}
//         options={flashcards[currentIndex].options}
//         correctAnswer={flashcards[currentIndex].correctAnswer}
//         onCorrectAnswer={handleNextCard} // Pass selected answer to handleNextCard
//       />
//     </div>
//   );
// };

// export default GamePage;


import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { useRouteLoaderData } from 'react-router-dom';

const GamePage = () => {
  const flashcards = [
    { question: "What is the capital of France?", options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correctAnswer: 'Paris' },
    { question: "What is the capital of India?", options: ['Berlin', 'Madrid', 'Delhi', 'Rome'], correctAnswer: 'Delhi' },
    { question: "What is the capital of Japan?", options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'], correctAnswer: 'Tokyo' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleNextCard = (selectedOption) => {
    if (selectedOption === flashcards[currentIndex].correctAnswer) {
      setPoints(points + 4); // Add 4 points for the correct answer
    } else {
      setPoints(points - 1); // Deduct 1 point for the wrong answer
    }

    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true); // Mark completion when all flashcards are answered
    }
  };

  const handleReset = () => {
    window.location.reload(); // Reloads the page to reset the game
  };
  return (
    <div className="flex flex-col items-center overflow-hidden justify-center h-screen bg-gradient-to-t from-gray-300 to-slate-800">
      <div className="text-white mb-4 top-5 left-0 right-6">Points: {points}</div>
      <h1 className="text-4xl font-semibold text-white mb-8">Test Your Knowledge</h1>

      {isComplete ? (
        <div className="p-8 w-80 h-96 flex flex-col justify-center items-center rounded-lg border-2 bg-gradient-to-t from-slate-400 to-slate-600">
          <h2 className="text-2xl text-white mb-4">Well done! You've completed all the flashcards!</h2>
          <p className="text-xl text-white">Final Score: {points}

          </p>
          <button
            className=' w-20 h-10 bg-slate-400 mt-10  rounded-md text-red-50 border-2 border-slate-500'
            onClick={handleReset}
          >Reset</button>
        </div>
      ) : (
        <Flashcard
          key={currentIndex}
          question={flashcards[currentIndex].question}
          options={flashcards[currentIndex].options}
          correctAnswer={flashcards[currentIndex].correctAnswer}
          onCorrectAnswer={handleNextCard}
        />
      )}
    </div>
  );
};

export default GamePage;
