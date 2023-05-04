
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

import s from './Main.module.css';

function Main() {
    return (
        <main className={s.wrap}>
            <Sidebar />
            <Content/>
          
        </main>
    );
}

export default Main;