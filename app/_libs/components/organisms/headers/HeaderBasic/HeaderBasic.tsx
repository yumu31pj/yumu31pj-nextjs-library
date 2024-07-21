import ResponsiveImage from "@/app/_libs/components/atoms/images/ResponsiveImage/ResponsiveImage";
import HeaderBasicWrapper from "@/app/_libs/components/layouts/headers/HeaderBasicWrapper/HeaderBasicWrapper";
import HeaderInnerBasic from "@/app/_libs/components/layouts/headers/HeaderInnerBasic/HeaderInnerBasicBasic";
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
            width={logoImageItem.width}
            height={logoImageItem.height}
            altText={logoImageItem.altText}
            breakpoint={logoImageItem.breakpoint}
          />
        </h1>
      </HeaderInnerBasic>
    </HeaderBasicWrapper>
  )
}

export default HeaderBasic;