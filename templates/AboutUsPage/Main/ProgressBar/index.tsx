import React from 'react';
import styles from './ProgressBar.module.sass';

function ProgressBar() {
  return (
    <div className={styles['countdown-wrap']}>
      <div className={styles.goal}>Full Mobilisation</div>
      <div className={styles.glass}>
        <div className={styles.progress}></div>
      </div>
      <div className={styles['goal-stat']}>
        <span className={styles['goal-number']}>Mobilising</span>
        <span className={styles['goal-number']}>Training</span>
        <span className={styles['goal-number']}>Rallying Allies</span>
        <span className={styles['goal-number']}>Launching Ops</span>
      </div>
    </div>
  );
}

export default ProgressBar;
