

import { Route, Routes } from 'react-router-dom';
import Family from './Family/Family';
import Home from '../pages/Home';
import Friends from './Friends/Friends';
import CloseFriends from './CloseFriends/CloseFriends';
import JustPeople from './JustPeople/JustPeople';
import Footer from './Footer/Footer';
import Header from './Header.tsx/Header';
import s from './App.module.css';
import Main from './Main/Main';
import { type } from 'os';

function App() {
  return (
    <>
      <Header />
      <div className={s.wrap} >
   
      
        
         <Main/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/family' element={<Family />} />
          <Route path='/closefr' element={<CloseFriends />} />
            <Route path='/justpeple' element={<JustPeople />} />
        </Routes>
       
        </div>
      <Footer/>

      </>
  );
}

export default App;
