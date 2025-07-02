import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <div className="mt-6 mb-6 flex flex-col gap-3 text-center">
        <h1>Pomodoro</h1>
        <hr></hr>
      </div>

      <Timer />
    </div>
  );
}

export default App;
