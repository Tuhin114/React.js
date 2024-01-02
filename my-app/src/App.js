import "./App.css";

let name = "React-App";
let className = "App-header";

function App() {
  return (
    <div className="App">
      <div className={className}>
        {name}
        <Demo></Demo>
      </div>
    </div>
  );
}
function Demo() {
  return (
    <div className="App">
      <div className="App-header">Demo</div>
    </div>
  );
}

export default App;
