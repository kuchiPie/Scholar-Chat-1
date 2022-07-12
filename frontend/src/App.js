import {Route,Switch} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import './App.css'
import VerifyPage from './pages/VerifyPage';

function App() {
  return (
    <div className="App">
        <Route path='/' component={HomePage}></Route>
        <Route path='/chats' component={ChatPage}></Route>
        <Route path='/verify/:id' component={VerifyPage}></Route>
    </div>
  );
}

export default App;
