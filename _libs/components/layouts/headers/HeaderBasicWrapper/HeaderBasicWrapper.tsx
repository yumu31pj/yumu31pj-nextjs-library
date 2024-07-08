import styles from "./HeaderBasicWrapper.module.scss";
import { HeaderBasicWrapperType } from "./HeaderBasicWrapper.types";

const HeaderBasicWrapper = (props: HeaderBasicWrapperType) => {
  const {children} = props;
  return (
    <header id="header" className={styles['l-header']}>
      {children}
    </header>
  )
}

export default HeaderBasicWrapper;