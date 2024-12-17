import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer({
  isRecording,
  isPlaying,
  onTimerEnd = () => {},
}) {
  const [time, setTime] = useState(0);
  const [limit, setLimit] = useState(0);
  const [lastAction, setLastAction] = useState('');

  useEffect(() => {
    let interval;
    if (lastAction === "recording") setLimit(time);
    if (isRecording) {
      resetTimer();
      startInterval(() => setTime((prev) => prev + 1));
      updateLastAction("recording");
    } else if (isPlaying) {
      if (time >= limit) resetTimer();
      startInterval(() => {
        setTime((prev) => {
          if (prev < limit) return prev + 1;
          requestAnimationFrame(onTimerEnd);
          return prev;
        });
      });
      updateLastAction("playing");
    } 

    function resetTimer() {
      setTime(0);
    }

    function startInterval(callback) {
      interval = setInterval(callback, 1000);
    }

    function updateLastAction(action) {
      if (lastAction !== action) setLastAction(action);
    }

    return () => interval && clearInterval(interval);
  }, [isRecording, isPlaying, onTimerEnd]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.timer}>
      <div className="container" aria-live="polite">
        <span className={time === 0 ? styles.inactive : undefined}>
          <strong>{formatTime(time)}</strong>
        </span>
      </div>

      <div
        className={`
          ${isRecording || isPlaying ? styles.timing : styles.hidden}
          ${lastAction ? styles[lastAction] : undefined} 
          `}
      >
        <div className={styles.indicator} aria-hidden="true" />
        <span>{lastAction}</span>
      </div>
    </div>
  );
}
