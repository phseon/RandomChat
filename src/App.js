import './App.css';
import Mypage from './pages/Mypage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Route component={Mypage} path="/Mypage"/>
      </BrowserRouter>
    </div>
  );
}

export default App;