import { useState } from "react";
import { HelloWorld } from "web-component/react";
import "./App.css";

function App() {
  const [name, setName] = useState("react");

  return (
    <div>
      <h1>React Playground</h1>
      <HelloWorld name={name} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
