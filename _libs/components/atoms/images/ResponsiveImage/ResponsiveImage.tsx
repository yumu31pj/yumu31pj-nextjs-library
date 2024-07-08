import styles from "./ResponsiveImage.module.scss";
import { ResponsiveImageType } from "./ResponsiveImage.types";

const ResponsiveImage = (props: ResponsiveImageType) => {
  const {srcPC, srcSP, srcWebpPC, srcWebpSP, widthSP, heightSP, widthPC, heightPC, altText, breakpointsPC, breakpointsTB} = props;
  return (
    <picture className={styles.responsive_image}>
      {srcWebpPC && <source srcSet={srcWebpPC} media={`(min-width: ${breakpointsPC}px)`} type="image/webp" />}
      {srcWebpSP && <source srcSet={srcWebpSP} type="image/webp" />}
      <source srcSet={srcPC} media={`(min-width: ${breakpointsPC}px)`} {...(widthPC && { width: widthPC })} {...(heightPC && { height: heightPC })}　/>
      <img src={srcSP} {...(widthSP && { width: widthSP })} {...(heightSP && { height: heightSP })} alt={altText} />
    </picture>
  )
}

export default ResponsiveImage;