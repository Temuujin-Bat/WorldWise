import styles from "./Message.module.css";

type MessageProps = {
  message: string;
};

function Message(props: MessageProps) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {props.message}
    </p>
  );
}

export default Message;
