

import Routes from '../Routes/Routes';
import Sidebar from '../Sidebar/Sidebar';

import s from './Main.module.scss';

function Main() {
    return (
        <main className={s.wrap}>
            <Sidebar />
            <Routes/>
          
        </main>
    );
}

export default Main;