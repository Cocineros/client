import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav'
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Markdown from './components/markdown/Markdown';

import 'antd/dist/antd.css';

function App() {
  console.log("markdown", typeof Markdown)

  return (
      <>
        <Nav/>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/signup' element={ <Signup />} />
        </Routes>
        <Markdown />
      </>
  );
}

export default App;
