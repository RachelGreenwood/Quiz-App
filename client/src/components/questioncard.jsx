import { useState } from "react";

const QuestionCard = (props) => {
  // Makes a list of answers and places correct answer at a random index
  const { correct_answer, incorrect_answers } = props.question;
  const allOptions = [...incorrect_answers]; 
  const getRandomNum = () => {
    return Math.floor(Math.random() * (allOptions.length + 1));
  } 
  allOptions.splice(getRandomNum(), 0, correct_answer);

  // Logs if user selected an answer or not
  const [answerSelected, setAnswerSelected] = useState(false);
  // Logs if the selected answer was correct
  const [selectedAns, setSelectedAns] = useState(null);

  // When user chooses answer, log selected answer
  const handleBtnClick = event => {
    setAnswerSelected(true);
    setSelectedAns(event.target.textContent)
    // If answer is correct, add 1 to score
    if (event.target.textContent === correct_answer) {
      props.setScore(props.score + 1);
      props.childToParent(score)
    }
  }

    return (
      <div className={"question-section"}>
        <span>Question {props.qNum}</span>/10
        {/* Shows question formatted for humans */}
        <div className='question-text' dangerouslySetInnerHTML={{ __html: props.question.question }}></div>
        <div className='answer-section'>
          {allOptions.map((option, index) => (
            <button key={index} onClick={handleBtnClick}>{option}</button>
          ))}
        </div>
      </div>
    );
  };

export default QuestionCard;