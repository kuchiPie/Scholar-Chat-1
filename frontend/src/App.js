import {Route} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import './App.css'

function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/chats' component={ChatPage}></Route>
    </div>
  );
}

export default App;
