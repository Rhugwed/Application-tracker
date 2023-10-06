import styles from './Navigation.module.css';
import Button from '../Button/Button';

const Navigation = () => {
    return (
    <nav className={`${styles.Navigation} container`}>
      <div className="logo">
        <img src="/images/r.png" alt="logo"></img>
      </div>
      
      <ul>
        <li href='#'>Menu</li>
        <li href='#'>Location</li>
        <li href='#'>About</li>
        <li href='#'>Contact</li>
      </ul>

      <Button isLogin={true}  text="Login" ></Button>
    </nav>
    );
};

export default Navigation;