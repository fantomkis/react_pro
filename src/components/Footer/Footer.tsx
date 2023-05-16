
import s from './Footer.module.scss';
import titleFooter from '../../inform';

function Footer() {
    return (
        <footer className={s.footer}>
            <h2 className={s.title}>{ titleFooter}</h2>
            
        </footer>
    );
}

export default Footer;