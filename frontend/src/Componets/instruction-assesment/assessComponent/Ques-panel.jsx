import React, { useState, useEffect } from 'react';

const QuestionPanel = ({
  question,
  questionIndex,
  totalQuestions,
  onPrev,
  onNext,
  onSubmit,
  userAnswer,
  submitted,
}) => {
  const [selectedOption, setSelectedOption] = useState(userAnswer || null);

  useEffect(() => {
    setSelectedOption(userAnswer || null);
  }, [questionIndex, userAnswer]);

  const handleSubmit = () => {
    if (selectedOption === null) return alert('Please select an option');
    onSubmit(questionIndex, selectedOption);
  };

  if (!question) return <div>No question available</div>;

  return (
    <div className="assessment-content">
      <div className="question-tab">
        <div className="question">
          <p className="index">{questionIndex + 1}.</p> {question.question}
        </div>
        <hr />
        <div className="options">
          {question.options.map((opt, i) => (
            <div key={i}>
              <label htmlFor={`option-${i}`} className="option-label">
                <input
                  type="radio"
                  className='radio-btn'
                  name={`mcqOption-${questionIndex}`}
                  value={opt}
                  id={`option-${i}`}
                  onChange={() => setSelectedOption(opt)}
                  checked={selectedOption === opt}
                  disabled={submitted}
                />
                <span>{opt}</span>
              </label>
              {i !== question.options.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>

      <div className="btns mt-4">
        <button
          className="btn btn-primary"
          onClick={onPrev}
          disabled={questionIndex === 0}
        >
          Prev
        </button>

        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={questionIndex === totalQuestions - 1}
        >
          Next
        </button>

        <button
          className="btn btn-success"
          onClick={handleSubmit}
          disabled={!selectedOption || submitted}
        >
          {submitted ? 'Submitted' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default QuestionPanel;
