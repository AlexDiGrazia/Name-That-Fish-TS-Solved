import "./App.css";
import { ClassApp } from "./Components/Class/ClassApp";
import { FunctionalApp } from "./Components/Functional/FunctionalApp";

function App() {
  return (
    <div className="App">
      <h1>Name That Fish</h1>
      <div className="split">
        <div className="left">
          <h3>Functional</h3>
          <FunctionalApp />
        </div>
        <div className="right">
          <h3>Class</h3>
          <ClassApp />
        </div>
      </div>
    </div>
  );
}

export default App;
