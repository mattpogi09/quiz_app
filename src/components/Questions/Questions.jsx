import { useState, useEffect } from "react";

const Questions = () => {
  const quizData = [
    {
      question: "Who is the Father of Computing?",
      answers: ["Charles Gumondas", "Charles Morgan", "Charles Babbage", "Charles Darwin"],
      correct: "Charles Babbage",
    },
    {
      question: "Kailan nag simula ang first day of school after enrollment nung first year?",
      answers: ["August 6", "August 7", "August 8", "August 9"],
      correct: "August 7",
    },
    {
      question: "Which Pokémon is Ash Ketchum’s closest companion and the one he considers his favorite throughout his journey?",
      answers: ["Charizard", "Greninja", "Pikachu", "Infernape"],
      correct: "Pikachu",
    },
    {
      question: "Who is recognized as the strongest Water Breathing swordsman in Demon Slayer: Kimetsu no Yaiba?",
      answers: ["Tanjiro Kamado", "Giyu Tomioka", "Sabito", "Urokodaki Sakonji"],
      correct: "Giyu Tomioka",
    },
    {
      question: "What is the full name of our president (specifically BSIT 3A)",
      answers: ["John Francis D. Miravilla", "Plywood Francis D. Miravilla", "John Bisaya D. Miravilla", "Francis John D. Miravilla"],
      correct: "Francis John D. Miravilla",
    },
    {
      question: "Which Minecraft mob explodes when it gets close to you",
      answers: ["Skeleton", "Creeper", "Enderman", "Aw Man"],
      correct: "Creeper",
    },
    {
      question: "10 + 9 =?",
      answers: ["21", "18", "10 + 9", "19"],
      correct: "21",
    },
    {
      question: "its beginning to look a lot like?",
      answers: ["and a happy new year", "Christmas", "Jingle Bell", "gwapo/gwapa jud kaayu ku"],
      correct: "gwapo/gwapa jud kaayu ku",
    },
    {
      question: "What is the name of SpongeBob SquarePants pet snail?",
      answers: ["Larry", "Gary", "Terry", "Barry"],
      correct: "Gary",
    },
    {
      question: "What is the component 'name' did I use to make this quiz?",
      answers: ["Quiz.jsx", "Pagsusulit.jsx", "Catechism.jsx", "Question.jsx"],
      correct: "Question.jsx",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  // useEffect mag check if tapos na ang quiz
  useEffect(() => {
    if (current >= quizData.length) {
      setIsFinished(true);
    }
  }, [current]);

  const handleAnswer = (answer) => {
    if (selected) return;
    setSelected(answer);

    if (answer === quizData[current].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!selected) return;
    setCurrent((prev) => prev + 1);
    setSelected(null);
  };

  // maging true to pag finish na ang quiz since naka false mn ang isFinished restart quiz po

   if (isFinished) {

  if (score <= 2) {
    return (
      <div className="max-w-xl mx-auto mt-16 bg-white shadow-xl rounded-2xl p-6 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Quiz Finish sayang</h1>
        <p className="text-lg text-gray-700">
          You scored <span className="font-bold text-blue-600">{score}</span> out of {quizData.length}
        </p>
        <button
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setSelected(null);
            setIsFinished(false);
          }}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg 
                     border-b-4 border-blue-700 hover:border-blue-500
                     active:scale-95 transition transform duration-150"
        >
          Restart Quiz
        </button>
      </div>
    );
  } else {
    return (
      <div className="max-w-xl mx-auto mt-16 bg-white shadow-xl rounded-2xl p-6 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Quiz Finish Chambarul</h1>
        <p className="text-lg text-gray-700">
          You scored <span className="font-bold text-blue-600">{score}</span> out of {quizData.length}
        </p>
        <button
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setSelected(null);
            setIsFinished(false);
          }}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg 
                     border-b-4 border-blue-700 hover:border-blue-500
                     active:scale-95 transition transform duration-150"
        >
          Restart Quiz
        </button>
      </div>
    );
  }
}

  // Safe rendering
  const question = quizData[current];
  if (!question) return null;

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white flex flex-col shadow-xl rounded-2xl p-6 space-y-4">
      <h1 className="font-bold text-center text-3xl text-gray-800">Quiz App</h1>
      <hr className="border-gray-300" />

      <h2 className="font-semibold text-lg text-gray-700">{question.question}</h2>

      <ul className="space-y-2">
        {question.answers.map((answer, i) => {
          let bg = "bg-gray-100 hover:bg-gray-200";
          if (selected) {
            if (answer === question.correct) bg = "bg-green-400 text-white";
            else if (answer === selected) bg = "bg-red-400 text-white";
          }
          return (
            <li
              key={i}
              onClick={() => handleAnswer(answer)}
              className={`p-3 rounded-lg cursor-pointer transition ${bg}`}
            >
              {answer}
            </li>
          );
        })}
      </ul>

      <button
        onClick={handleNext}
        disabled={!selected}
        className={`w-full py-3 rounded-lg font-bold text-white transition transform duration-150 border-b-4
          ${selected
            ? "bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500 active:scale-95"
            : "bg-gray-300 border-gray-400 cursor-not-allowed"
          }`}
      >
        Next
      </button>

      <div className="font-medium text-gray-600 text-center">
        {current + 1} of {quizData.length} questions
      </div>
    </div>
  );
};

export default Questions;
