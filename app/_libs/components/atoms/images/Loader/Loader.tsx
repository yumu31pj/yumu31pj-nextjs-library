// cssモジュール
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loader;