import { useReducer, useState } from "react";

const initialState = {
  count: 0,
  history: []
};

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      const newCount = state.count + 1;
      return {
        count: newCount,
        history: [...state.history, `+1 → ${newCount}`]
      };
    }

    case "DECREMENT": {
      const newCount = state.count - 1;
      return {
        count: newCount,
        history: [...state.history, `-1 → ${newCount}`]
      };
    }

    case "RESET":
      return {
        count: 0,
        history: [...state.history, `Reset → 0`]
      };

    case "INCREMENT_BY": {
      const newCount = state.count + action.payload;
      return {
        count: newCount,
        history: [...state.history, `+${action.payload} → ${newCount}`]
      };
    }

    default:
      return state;
  }
}

export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Count: {state.count}</h2>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button
          onClick={() =>
            dispatch({ type: "INCREMENT_BY", payload: inputValue })
          }
        >
          Add Value
        </button>
      </div>

      <h3>History:</h3>
      <div>
        {state.history.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </div>
  );
}