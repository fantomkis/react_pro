
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.scss";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={s.btn} end>
        Home
      </NavLink>
      <NavLink to="friends" className={s.btn}>
       <img width={40} src="https://www.svgrepo.com/show/490894/people-in-car-side-view.svg"  alt="" /> Friends
          </NavLink>
          <NavLink to="family" className={s.btn}>
         <img src="./1.svg" alt="" />
        <img src="https://www.svgrepo.com/show/291852/people-teamwork.svg" alt=""  width={40}/> Family
        <i className="fa fa-camera-retro fa-lg"></i>
          </NavLink>
          <NavLink to="closefr" className={s.btn}>
       <img src="https://www.svgrepo.com/show/490298/push-door.svg" width={40} alt="" /> Close Friends
          </NavLink>
          <NavLink to="justpeple" className={s.btn}><img src="https://www.svgrepo.com/show/492698/people-who-support.svg" width={40} alt="" />
       JustPeople
      </NavLink>
    </nav>
  );
};

export default Navigation;
