import React, { useState } from "react";
import "./App.css"; // optional CSS

const questions = [
  {
    question: "Which concept allows code reusability in Java?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Abstraction",
      "Polymorphism"
    ],
    correctAnswer: 1
  },
  {
    question: "Which keyword is used to throw an exception manually?",
    options: [
      "throws",
      "catch",
      "exception",
      "throw"
    ],
    correctAnswer: 3
  },
  {
    question: "Which keyword prevents inheritance?",
    options: [
      "static",
      "final",
      "private",
      "protected"
    ],
    correctAnswer: 1
  },
  {
    question: "Which keyword is used to stop method overriding?",
    options: [
      "static",
      "private",
      "protected",
      "final"
    ],
    correctAnswer: 3
  },
  {
    question: "Which access modifier allows access within the same package only?",
    options: [
      "public",
      "private",
      "protected",
      "default"
    ],
    correctAnswer: 3
  },
  {
    question: "Which collection stores key-value pairs?",
    options: [
      "List",
      "Set",
      "Map",
      "Queue"
    ],
    correctAnswer: 2
  },
  {
    question: "Which exception is unchecked?",
    options: [
      "IOException",
      "SQLException",
      "NullPointerException",
      "FileNotFoundException"
    ],
    correctAnswer: 2
  }
];



function App() {

  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Handle Next button
  const handleNext = () => {

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  // Restart Quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container">

      <h1>Quiz Application</h1>

      {showResult ? (
        // Result Screen
        <div>
          <h2>Quiz Finished</h2>
          <p>Your Score: {score}</p>
          <p>Total Questions: {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        // Quiz Screen
        <div>

          <h3>
            Question {currentQuestion + 1} of {questions.length}
          </h3>

          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name="option"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              <label>{option}</label>
            </div>
          ))}

          <br />

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
}

export default App;
