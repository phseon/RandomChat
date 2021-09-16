import './App.css';
import Mypage from './pages/Mypage';
import { Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Route component={Mypage} path="/Mypage" exact/>
    </div>
  );
}

export default App;