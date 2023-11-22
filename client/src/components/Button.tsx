import styles from "./Button.module.css";

export default function Button({ children, onCLick, type }) {
  return (
    <button onClick={onCLick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
