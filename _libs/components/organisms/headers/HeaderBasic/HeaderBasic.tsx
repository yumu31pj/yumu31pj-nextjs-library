import ResponsiveImage from "@/_libs/components/atoms/images/ResponsiveImage/ResponsiveImage";
import HeaderBasicWrapper from "@/_libs/components/layouts/headers/HeaderBasicWrapper/HeaderBasicWrapper";
import HeaderInnerBasic from "@/_libs/components/layouts/headers/HeaderInnerBasic/HeaderInnerBasicBasic";
import { HeaderBasicType } from "./HeaderBasic.types";

const HeaderBasic = (props: HeaderBasicType) => {
  const {logoImageItem} = props;
  return (
    <HeaderBasicWrapper>
      <HeaderInnerBasic>
        <h1>
          <ResponsiveImage
            srcSP={logoImageItem.srcSP}
            srcPC={logoImageItem.srcPC}
            srcWebpSP={logoImageItem.srcWebpSP}
            srcWebpPC={logoImageItem.srcWebpPC}
            widthSP={logoImageItem.widthSP}
            heightSP={logoImageItem.heightSP}
            widthPC={logoImageItem.widthPC}
            heightPC={logoImageItem.heightPC}
            altText={logoImageItem.altText}
            breakpointsPC={logoImageItem.breakpointsPC}
            breakpointsTB={logoImageItem.breakpointsTB}
          />
        </h1>
      </HeaderInnerBasic>
    </HeaderBasicWrapper>
  )
}

export default HeaderBasic;