import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    // Sets questions and score
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);

    // Fetches data from API for questions and answers
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

    // Callback function to get final score
    const childToParent = (childData) => {
        setScore(childData);
    }

    return (
        <div className="Container">
            {questions.map((question, index) => (
                <QuestionCard
                key={index}
                question={question}
                onAnswerSelect={(selectedAnswer) => handleAnswerSelect(selectedAnswer, index)}
                score={score}
                setScore={setScore}
                qNum={index + 1}
                childToParent={childToParent}
                />
            ))}
            <div>Final Score: {score}!</div>
        </div>
    )

}

export default Game;