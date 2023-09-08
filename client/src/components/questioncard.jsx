import { useState } from "react";

const QuestionCard = (props) => {
  const { question, correct_answer, incorrect_answers } = props.question;
  const index = 0;
  const allOptions = [...incorrect_answers]; 
  const getRandomNum = () => {
    return Math.floor(Math.random() * (allOptions.length + 1));
  } 
  allOptions.splice(getRandomNum(), 0, correct_answer);

  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAns, setSelectedAns] = useState(null);

  const handleBtnClick = event => {
    setAnswerSelected(true);
    setSelectedAns(event.target.textContent)
    if (event.target.textContent === correct_answer) {
      props.setScore(props.score + 1);
    }
    console.log(getRandomNum());
  }

    return (
      <div className={"question-section"}>
        <span>Question {props.qNum}</span>/10
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
          {allOptions.map((option, index) => (
            <button key={index} onClick={handleBtnClick}>{option}</button>
          ))}
        </div>
        <div>
          Score: {props.score}
        </div>
      </div>
    );
  };

export default QuestionCard;