
import './App.css';

function App() {

  const onButtonClick = () => {
    alert("YO")
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick = {onButtonClick}>Hi</button>
    </div>
  );
}

export default App;
