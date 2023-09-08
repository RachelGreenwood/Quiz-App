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

    const [data, setData] = useState("");
    const childToParent = (childData) => {
        setScore(childData);
    }

    return (
        <div className="Container">
            {questions.map((question, index) => (
                <QuestionCard
                key={index}
                question={question}
                userAnswers={userAnswers[index]}
                onAnswerSelect={(selectedAnswer) => handleAnswerSelect(selectedAnswer, index)}
                score={score}
                setScore={setScore}
                qNum={index + 1}
                childToParent={childToParent}
                />
            ))}
            <div>Score: {score}</div>
        </div>
    )

}

export default Game;