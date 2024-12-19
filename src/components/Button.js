import styles from "./Button.module.css";

const Button = ({ text, dynamicText, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
      {dynamicText}
    </button>
  );
};

export default Button;
