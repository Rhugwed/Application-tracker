import styles from './Button.module.css';



const Button = (props) => {
    const { isLogin, text} = props;
  return (
    <button className={isLogin ? styles.login_btn : styles.normal_btn}>
        {text}
    </button>
  )
}
 
export default Button