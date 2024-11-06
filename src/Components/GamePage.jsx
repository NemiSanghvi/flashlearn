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

//   const handleNextCard = () => {
//     if (currentIndex < flashcards.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       alert("You've completed all flashcards!");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center overflow-hidden justify-center h-screen bg-gradient-to-t from-gray-300 to-slate-800">
//       <h1 className="text-4xl font-semibold text-white mb-8">
//         Test Your Knowledge
//       </h1>
//       <div >Points:</div>
//       <Flashcard
//         key={currentIndex} // Reset animation on card change
//         question={flashcards[currentIndex].question}
//         options={flashcards[currentIndex].options}
//         correctAnswer={flashcards[currentIndex].correctAnswer}
//         onCorrectAnswer={handleNextCard}
//       />
//     </div>
//   );
// };

// export default GamePage;


// src/components/GamePage.jsx
import React, { useState } from 'react';
import Flashcard from './Flashcard';

const GamePage = () => {
  const flashcards = [
    {
      question: "What is the capital of France?",
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: "What is the capital of India?",
      options: ['Berlin', 'Madrid', 'Delhi', 'Rome'],
      correctAnswer: 'Delhi',
    },
    {
      question: "What is the capital of Japan?",
      options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'],
      correctAnswer: 'Tokyo',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [points, setPoints] = useState(0);

  const handleNextCard = (selectedOption) => {
    if (selectedOption === flashcards[currentIndex].correctAnswer) {
      setPoints(points + 4); // Add 4 points for the correct answer
    } else {
      setPoints(points - 1); // Deduct 1 point for the wrong answer
    }

    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("You've completed all flashcards!");
    }
  };

  return (
    <div className="flex flex-col items-center overflow-hidden justify-center h-screen bg-gradient-to-t from-gray-300 to-slate-800">
      <div className="text-white mb-4 top-5 left-0 right-6">Points: {points}</div>
      <h1 className="text-4xl font-semibold text-white mb-8">
        Test Your Knowledge
      </h1>

      <Flashcard
        key={currentIndex} // Reset animation on card change
        question={flashcards[currentIndex].question}
        options={flashcards[currentIndex].options}
        correctAnswer={flashcards[currentIndex].correctAnswer}
        onCorrectAnswer={handleNextCard} // Pass the selected answer to handleNextCard
      />
    </div>
  );
};

export default GamePage;

