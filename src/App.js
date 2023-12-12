import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Post from './Components/Post';
import PostListDetail from './Components/PostListDetail';
import Chatbox from './Components/Chatbox';
import socketIO from 'socket.io-client';
import Chatpage from './Components/Chatpage';

function App() {
  const socket = socketIO.connect('http://localhost:4000');

  return (
    <div className="App">
<BrowserRouter>
      <Routes>
      <Route path='/' element={<Chatpage/>}/>
      <Route path='chat' element={<Chatbox socket={socket}/>}/>
      <Route path='/PostListDetail' element={<PostListDetail/>}/>
      <Route path="/chat" element={<Chatpage socket={socket} />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
