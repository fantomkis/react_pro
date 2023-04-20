

import { Route, Routes } from 'react-router-dom';
import Family from './Family/Family';
import Sidebar from './Sidebar/Sidebar';
import Home from '../pages/Home';
import Friends from './Friends/Friends';
import CloseFriends from './CloseFriends/CloseFriends';
import JustPeople from './JustPeople/JustPeople';
import Footer from './Footer/Footer';
import Header from './Header.tsx/Header';

function App() {
  return (
    <>
    <Header/>
      <Sidebar/>
      
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/family' element={<Family />} />
          <Route path='/closefr' element={<CloseFriends />} />
            <Route path='/justpeple' element={<JustPeople />} />
        </Routes>
      </main>
      <Footer/>

      </>
  );
}

export default App;
