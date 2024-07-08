import styles from "./FooterBasicWrapper.module.scss";
import { FooterBasicWrapperType } from "./FooterBasicWrapper.types";

const FooterBasicWrapper = (props: FooterBasicWrapperType) => {
  const {children} = props;
  return (
    <footer id="footer" className={styles['l-footer']}>
      {children}
    </footer>
  )
}

export default FooterBasicWrapper;