import { useState } from "react";

const QuestionCard = (props) => {
  const { question, correct_answer, incorrect_answers } = props.question;
  const allOptions = [correct_answer, ...incorrect_answers];  

  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAns, setSelectedAns] = useState(null);
  const [score, setScore] = useState(1);

  const handleBtnClick = event => {
    setAnswerSelected(true);
    setSelectedAns(event.target.textContent)
    if (event.target.textContent === correct_answer) {
      setScore(score + 1);
      console.log(score);
    }
  }

    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
          {allOptions.map((option, index) => (
            <button key={index} onClick={handleBtnClick}>{option}</button>
          ))}
        </div>
      </div>
    );
  };

export default QuestionCard;