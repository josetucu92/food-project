import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <h1>All Your Food. One Place.</h1>

        <Link to="/home" className={styles.btn}>
          Press to START!
        </Link>
      </div>
    </main>
  );
}
