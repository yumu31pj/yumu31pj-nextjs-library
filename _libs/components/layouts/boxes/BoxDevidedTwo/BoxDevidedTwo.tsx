import styles from "./BoxDevidedTwo.module.scss";
import { BoxDevidedTwoType } from "./BoxDevidedTwo.types";

/**
 * @param props 
 * @returns 
 */
const BoxDevidedTwo = (props: BoxDevidedTwoType) => {
  const {firstComponent, secondComponent, isReverse} = props;
  const baseClass = 'l-box-devided-two';
  const modifierClass = isReverse ? baseClass + "--reverse" : ""; 

  return (
    <div className={`${styles[baseClass]}${isReverse ? null : "" + styles[modifierClass]}`}>
      <div className={`${styles[baseClass]} + __first`}>{firstComponent}</div>
      <div className={`${styles[baseClass]} + __second`}>{secondComponent}</div>
    </div>
  )
}

export default BoxDevidedTwo;