import React from "react";

import styles from "./NotFoundBlock.module.scss";

console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>
        На жаль, такої сторінки в нашому інтернет-магазині немає
      </p>
    </div>
  );
};

export default NotFoundBlock;
