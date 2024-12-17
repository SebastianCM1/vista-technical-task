import styles from "./ActivityButton.module.css";

function ActivityButton({
  icon = "🎤",
  onClick,
  disabled = false,
  isActive = false,
  name='',
  className = "",
  label = "",
}) {
  return (
    <div className={styles.buttonContainer}>
      <label className={styles.label}>{label}</label>
      <div className={`${styles.ring} ${isActive && styles.ringActive}`}>
        <button
          className={`${styles.button} ${className} ${
            isActive && styles.buttonActive
          }`}
          onClick={onClick}
          disabled={disabled}
          aria-label={`${name}-button`}
        >
          {icon}
        </button>
      </div>
    </div>
  );
}

export default ActivityButton;
