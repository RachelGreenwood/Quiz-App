import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);

    const handleAnswerSelect = (selectedAnswer, questionIndex) => {
        const newAnswers = [...userAnswers];
        newAnswers[questionIndex] = selectedAnswer;
        setUserAnswers(newAnswers);
        console.log(newAnswers);
        console.log(userAnswers);
      };

    const loadData = () => {
        fetch('http://localhost:3000/api')
            .then((response) => response.json())
            .then(data => {
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => (
                <QuestionCard
                key={index}
                question={question}
                userAnswer={userAnswers[index]}
                onAnswerSelect={(selectedAnswer) => handleAnswerSelect(selectedAnswer, index)}
                score={score}
                setScore={setScore}
                />
            ))}
        </div>
    )

}

export default Game;