import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Typewriter.module.sass";

const Typewriter: React.FC = () => {
  useEffect(() => {
    const dataText = ["Power", "Property", "Provenance"];

    const typeWriter = (text: string, i: number, fnCallback: () => void) => {
      if (i < text.length) {
        document.querySelector(`.${styles.typewriterHeader}`)!.innerHTML =
          text.substring(0, i + 1) +
          `<span class="${styles.typewriterSpan}" aria-hidden="true"></span>`;
        setTimeout(() => {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } else if (typeof fnCallback === "function") {
        setTimeout(fnCallback, 700);
      }
    };

    const startTextAnimation = (i: number) => {
      if (i < dataText.length) {
        typeWriter(dataText[i], 0, () => {
          startTextAnimation(i + 1);
        });
      } else {
        setTimeout(() => {
          startTextAnimation(0);
        }, 150);
      }
    };

    startTextAnimation(0);
  }, []);

  return (
    <h1 className={cn("h1", styles.typewriterHeader)}>Heading</h1>
  );
};

export default Typewriter;
