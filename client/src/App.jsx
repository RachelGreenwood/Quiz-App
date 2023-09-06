import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import UserForm from './components/user.jsx';
import Game from './components/game.jsx';

function App() {
  const [user, setUser] = useState("")
  const handleUser = (text) => {
    setUser(text);
  }

  return (
    <div>
      <Header user={user} />
      <UserForm grabUser={handleUser} />
      {user ? <Game /> : null}
    </div>
  )
}

export default App;