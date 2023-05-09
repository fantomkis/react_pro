import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Friends from '../Friends/Friends';
import Family from '../Family/Family';
import CloseFriends from '../CloseFriends/CloseFriends';
import JustPeople from '../JustPeople/JustPeople';
import Notfound from '../Notfound/Notfound';
import s from './Content.module.scss';

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