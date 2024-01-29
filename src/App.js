import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Show from './Components/Show';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Blogs from './Components/Blogs.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
<Navbar/>
   <Routes>

   <Route path='/home'element={<Home/>} ></Route>
    <Route path='/add'element={<Add/>} ></Route>
    <Route path='/show'element={<Show/>} ></Route>
    <Route path='/blogs'element={<Blogs/>} ></Route>
    <Route path='/contact'element={<Contact/>} ></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
