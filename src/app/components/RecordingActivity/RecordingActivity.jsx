"use client";

import React, { useState, useRef } from "react";
import ActivityButton from "../ActivityButton/ActivityButton";
import Timer from "../Timer/Timer";
import styles from "./RecordingActivity.module.css";
import { CiStop1, CiPlay1 } from "react-icons/ci";
import { TfiControlRecord } from "react-icons/tfi";

function Activity() {
  const [status, setStatus] = useState(""); // "record", "play", or ""
  const [isFinalAnswer, setIsFinalAnswer] = useState(false);
  const textAreaRef = useRef(null);

  const handleButtonClick = (action) => {
    if (action === "record") {
      setStatus("record");
    } else if (action === "play") {
      setStatus("play");
    } else if (action === "stop") {

      if (status === "play") {
        textAreaRef.current.focus();
      }

      setStatus("");


   
    }
  };

  const handleSubmit = (event) => {
    // Submit logic here
    
  };

  return (
    <div className="card">
      <h2>Say the vocabulary words.</h2>
      <div className={styles.recordingContainer}>
        <div className={styles.buttonContainer}>
          <ActivityButton
            className={styles.stopButton}
            name="stop"
            onClick={() => handleButtonClick("stop")}
            label="Stop"
            icon={<CiStop1 />}
          />
          <ActivityButton
            isActive={status === "record"}
            name="record"
            className={styles.recordButton}
            onClick={() => handleButtonClick("record")}
            label="Record"
            icon={<TfiControlRecord />}
          />
          <ActivityButton
            isActive={status === "play"}
            name="play"
            className={styles.playButton}
            onClick={() => handleButtonClick("play")}
            label="Review your recording"
            icon={<CiPlay1 />}
          />
        </div>
        <Timer
          isPlaying={status === "play"}
          isRecording={status === "record"}
          onTimerEnd={() => setStatus("")}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="response"
          placeholder="Enter your answer based on the earlier reading material..."
          ref={textAreaRef}
          aria-label="Answer text area"
        />
        <div>
          <label htmlFor="final-answer">
            Is this your <strong>final</strong> answer?
          </label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="final-answer"
                value="true"
                onChange={() => setIsFinalAnswer(true)}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name="final-answer"
                value="false"
                onChange={() => setIsFinalAnswer(false)}
              />
              False
            </label>
          </div>
        </div>
        <button
          className={`${styles.button} ${!isFinalAnswer && styles.disabled}`}
          type="submit"
          disabled={!isFinalAnswer}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Activity;
