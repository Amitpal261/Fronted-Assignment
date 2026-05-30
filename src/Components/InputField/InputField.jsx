import styles from "./InputField.module.css";

export default function InputField({ label, placeholder }) {
  return (
    <div className={styles.field}>
      <label >{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
}