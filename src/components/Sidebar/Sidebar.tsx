
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.scss";

const Navigation = () => {
  return (
    <header className={s.nav}>
      <NavLink to="/" className={s.btn} end>
        Home
      </NavLink>
      <NavLink to="friends" className={s.btn}>
        Friends
          </NavLink>
          <NavLink to="family" className={s.btn}>
        Family
          </NavLink>
          <NavLink to="closefr" className={s.btn}>
        Close Friends
          </NavLink>
          <NavLink to="justpeple" className={s.btn}>
        JustPeople
      </NavLink>
    </header>
  );
};

export default Navigation;
