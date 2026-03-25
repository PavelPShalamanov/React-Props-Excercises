import "./QuestionPreview.css";

function QuestionPreview({ question }) {
  return (
    <div className="question-preview">
      <p className="question-text">{question.text}</p>
      {question.options.map((opt, i) => (
        <div key={i} className="option-preview">
          <label>
            <input type="checkbox" disabled /> {opt}
          </label>
        </div>
      ))}
    </div>
  );
}

export default QuestionPreview;