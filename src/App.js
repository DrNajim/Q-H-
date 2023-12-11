import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Post from './Components/Post';
import PostListDetail from './Components/PostListDetail';
function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Routes>
      <Route path='/' element={<Post/>}/>
      <Route path='/PostListDetail' element={<PostListDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
