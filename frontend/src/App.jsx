import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <br />
      <h1><Link to={window.location.href + "ws/chat/"}>AI/LLM Chat</Link></h1>
      <hr />
    </div>
  );
}

export default App;
