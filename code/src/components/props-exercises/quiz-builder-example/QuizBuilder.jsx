import { useState } from "react";
import QuizHeader from "./QuizHeader";
import QuestionEditor from "./QuestionEditor";
import QuestionPreview from "./QuestionPreview";
import QuizStats from "./QuizStats";
import "./QuizBuilder.css";

function QuizBuilder() {
  const [mode, setMode] = useState("edit");
  const [title, setTitle] = useState("New quiz");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions(prev => [
      ...prev,
      {
        id: Date.now(),
        text: "",
        options: [],
        correctIndexes: []
      }
    ]);
  };

  const updateQuestion = (id, updated) => {
    setQuestions(prev =>
      prev.map(q => (q.id === id ? { ...q, ...updated } : q))
    );
  };

  const deleteQuestion = (id) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  const moveQuestion = (id, direction) => {
    setQuestions(prev => {
      const index = prev.findIndex(q => q.id === id);
      if (index === -1) return prev;
      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      const copy = [...prev];
      const temp = copy[index];
      copy[index] = copy[newIndex];
      copy[newIndex] = temp;
      return copy;
    });
  };

  return (
    <div className="quiz-builder">
      <button
        className="mode-toggle"
        onClick={() => setMode(mode === "edit" ? "preview" : "edit")}
      >
        {mode === "edit" ? "Preview" : "Edit"}
      </button>

      <QuizHeader
        title={title}
        onChange={setTitle}
        isPreview={mode === "preview"}
      />

      <div className="questions">
        {questions.map(q =>
          mode === "edit" ? (
            <QuestionEditor
              key={q.id}
              question={q}
              onUpdate={(updated) => updateQuestion(q.id, updated)}
              onDelete={() => deleteQuestion(q.id)}
              onMoveUp={() => moveQuestion(q.id, -1)}
              onMoveDown={() => moveQuestion(q.id, 1)}
            />
          ) : (
            <QuestionPreview key={q.id} question={q} />
          )
        )}
      </div>

      {mode === "edit" && (
        <button className="add-question-btn" onClick={addQuestion}>
          + New Question
        </button>
      )}

      <QuizStats questions={questions} />
    </div>
  );
}

export default QuizBuilder;