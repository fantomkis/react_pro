

import { Route, Routes } from 'react-router-dom';
import Family from './Family/Family';
import Navigation from './Navigation/Navigation';
import Home from '../pages/Home';
import Friends from './Friends/Friends';
import CloseFriends from './CloseFriends/CloseFriends';
import JustPeople from './JustPeople/JustPeople';

function App() {
  return (
    <>
    
      <Navigation/>
      
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/family' element={<Family />} />
          <Route path='/closefr' element={<CloseFriends />} />
            <Route path='/justpeple' element={<JustPeople />} />
          
        </Routes>
      </main>

      </>
  );
}

export default App;
