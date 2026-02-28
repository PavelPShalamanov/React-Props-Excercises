import "./QuizStats.css";

function QuizStats({ questions }) {
  const totalAnswers = questions.reduce((sum, q) => sum + q.options.length, 0);
  const questionsWithoutCorrect = questions.filter(q => q.correctIndexes.length === 0).length;

  return (
    <div className="quiz-stats">
      <p>Total Questions: {questions.length}</p>
      <p>Total Answers: {totalAnswers}</p>
      <p>Questions without correct answer: {questionsWithoutCorrect}</p>
    </div>
  );
}

export default QuizStats;