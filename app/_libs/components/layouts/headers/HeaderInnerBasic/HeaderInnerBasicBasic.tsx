import styles from "./HeaderInnerBasic.module.scss";
import { HeaderInnerBasicType } from "./HeaderInnerBasic.types";

const HeaderInnerBasic = (props: HeaderInnerBasicType) => {
  const {children} = props;
  return (
    <div className={styles['l-header-inner']}>
      {children}
    </div>
  )
}

export default HeaderInnerBasic;