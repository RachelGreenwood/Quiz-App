const QuestionCard = (props) => {
  const { question, correct_answer, incorrect_answers } = props.question;
  const allOptions = [correct_answer, ...incorrect_answers];  

    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
          {allOptions.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
        </div>
      </div>
    );
  };

export default QuestionCard;