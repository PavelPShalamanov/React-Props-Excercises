import CounterWithReducer from "../../components/state-management-exercises/counter-with-reducer-example/CounterWithReducer";

export default function CounterDemoPage() {
  return (
    <div>
      <h1>useReducer Counter Demo</h1>
      <p>
        This example demonstrates state management using useReducer instead of
        useState.
      </p>

      <CounterWithReducer />
    </div>
  );
}