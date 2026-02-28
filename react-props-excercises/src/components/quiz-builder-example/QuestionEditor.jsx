import { useState } from "react";
import "./QuestionEditor.css";

function QuestionEditor({ question, onUpdate, onDelete, onMoveUp, onMoveDown }) {
  const handleTextChange = (e) => {
    onUpdate({ text: e.target.value });
  };

  const addOption = () => {
    if (question.options.length >= 6) return;
    onUpdate({ options: [...question.options, ""] });
  };

  const updateOption = (index, value) => {
    const newOptions = [...question.options];
    newOptions[index] = value;
    onUpdate({ options: newOptions });
  };

  const toggleCorrect = (index) => {
    const correct = [...question.correctIndexes];
    if (correct.includes(index)) {
      onUpdate({ correctIndexes: correct.filter(i => i !== index) });
    } else {
      onUpdate({ correctIndexes: [...correct, index] });
    }
  };

  const deleteOption = (index) => {
    const newOptions = question.options.filter((_, i) => i !== index);
    const newCorrect = question.correctIndexes.filter(i => i !== index)
      .map(i => (i > index ? i - 1 : i));
    onUpdate({ options: newOptions, correctIndexes: newCorrect });
  };

  return (
    <div className="question-editor">
      <div className="question-header">
        <input
          type="text"
          placeholder="Question text"
          value={question.text}
          onChange={handleTextChange}
        />
        <div className="question-actions">
          <button onClick={onMoveUp}>↑</button>
          <button onClick={onMoveDown}>↓</button>
          <button onClick={onDelete}>✕</button>
        </div>
      </div>

      <div className="options">
        {question.options.map((opt, i) => (
          <div key={i} className="option-row">
            <input
              type="text"
              value={opt}
              onChange={(e) => updateOption(i, e.target.value)}
              placeholder={`Option ${i + 1}`}
            />
            <label>
              <input
                type="checkbox"
                checked={question.correctIndexes.includes(i)}
                onChange={() => toggleCorrect(i)}
              />
              Correct
            </label>
            <button onClick={() => deleteOption(i)}>Delete</button>
          </div>
        ))}
      </div>

      {question.options.length < 6 && (
        <button className="add-option-btn" onClick={addOption}>
          + Add Option
        </button>
      )}
    </div>
  );
}

export default QuestionEditor;