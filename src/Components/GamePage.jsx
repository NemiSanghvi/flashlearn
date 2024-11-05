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

  const handleNextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("You've completed all flashcards!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-t from-gray-300 to-slate-800">
      <h1 className="text-4xl font-semibold text-white mb-8">
        Welcome to the Game
      </h1>
      <Flashcard
        key={currentIndex} // Reset animation on card change
        question={flashcards[currentIndex].question}
        options={flashcards[currentIndex].options}
        correctAnswer={flashcards[currentIndex].correctAnswer}
        onCorrectAnswer={handleNextCard}
      />
    </div>
  );
};

export default GamePage;

