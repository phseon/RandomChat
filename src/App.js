import './App.css';
import Mypage from './components/Mypage';
import Profile from './components/Profile';
import EmailPassword from './components/EmailPassword'
import Gender from './components/Gender';

import React from 'react';
import Nickname from './components/Nickname';

function App() {


  return (
    <div className="App">
      <Mypage/>
      <Profile/>
      <EmailPassword/>
      <Nickname/>
      <Gender/>
    </div>
  );
}

export default App;
