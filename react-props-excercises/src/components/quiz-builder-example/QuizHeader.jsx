import "./QuizHeader.css";

function QuizHeader({ title, onChange, isPreview }) {
  return (
    <div className="quiz-header">
      {isPreview ? (
        <h2>{title}</h2>
      ) : (
        <input
          type="text"
          value={title}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Quiz title"
        />
      )}
    </div>
  );
}

export default QuizHeader;