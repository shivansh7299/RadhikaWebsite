import './App.css';
import MainComponent from './components/main/MainComponent'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
