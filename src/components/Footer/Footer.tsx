
import s from './Footer.module.css';
import titleFooter from '../../inform';

function Footer() {
    return (
        <div className={s.footer}>
            <h2 className={s.title}>{ titleFooter}</h2>
            
        </div>
    );
}

export default Footer;