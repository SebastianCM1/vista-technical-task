import styles from "./ActivityButton.module.css";

function ActivityButton({
  icon = "🎤",
  onClick,
  disabled = false,
  isActive = false,
  name = "",
  className = "",
  label = "",
}) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${className} ${
          isActive && styles.buttonActive
        }`}
        onClick={onClick}
        disabled={disabled}
        aria-labelledby={`${name}-button`}
      >
        {icon}
      </button>

      <label id={`${name}-button`} className={styles.label}>
        {label}
      </label>
    </div>
  );
}

export default ActivityButton;
