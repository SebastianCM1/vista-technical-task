import styles from "./page.module.css";
import RecordingActivity from "./components/RecordingActivity/RecordingActivity";

export default function Home() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Recording Activity</h1>
      </header>
      <main>
        <RecordingActivity />
      </main>
    </>
  );
}
