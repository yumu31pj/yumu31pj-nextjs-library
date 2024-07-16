import styles from "./ResponsiveImage.module.scss";
import { ResponsiveImageType } from "./ResponsiveImage.types";

const ResponsiveImage = (props: ResponsiveImageType) => {
  const {srcPC, srcSP, srcWebpPC, srcWebpSP, width, height, altText, breakpoint} = props;
  return (
    <picture className={styles.responsive_image}>
      {srcWebpPC && <source srcSet={srcWebpPC} media={`(min-width: ${breakpoint}px)`} type="image/webp" />}
      {srcWebpSP && <source srcSet={srcWebpSP} type="image/webp" />}
      <source srcSet={srcPC} media={`(min-width: ${breakpoint}px)`} {...(width && { width: width })} {...(height && { height: height })}　/>
      <img src={srcSP} {...(width && { width: width })} {...(height && { height: height })} alt={altText} />
    </picture>
  )
}

export default ResponsiveImage;