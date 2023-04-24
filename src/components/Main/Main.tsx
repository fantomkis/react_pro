
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../../pages/Home';
import Friends from '../Friends/Friends';
import Family from '../Family/Family';
import CloseFriends from '../CloseFriends/CloseFriends';
import JustPeople from '../JustPeople/JustPeople';
import s from './Main.module.css';
import Notfound from '../Notfound/Notfound';
function Main() {
    return (
        <main className={s.wrap}>
            <Sidebar />
                    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/family' element={<Family />} />
          <Route path='/closefr' element={<CloseFriends />} />
                <Route path='/justpeple' element={<JustPeople />} />
                <Route path='*' element={<Notfound/>} />
        </Routes>
        </main>
    );
}

export default Main;