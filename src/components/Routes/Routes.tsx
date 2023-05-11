import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Friends from '../../pages/Friends/Friends';
import Family from '../../pages/Family/Family';
import CloseFriends from '../../pages/CloseFriends/CloseFriends';
import JustPeople from '../../pages/JustPeople/JustPeople';
import Notfound from '../../pages/Notfound/Notfound';
import s from './Routes.module.scss';

function Content() {
    return (
        <div className={s.content}>       <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/family' element={<Family />} />
          <Route path='/closefr' element={<CloseFriends />} />
                <Route path='/justpeple' element={<JustPeople />} />
                <Route path='*' element={<Notfound/>} />
        </Routes>
            
            
        </div>
    );
}

export default Content;