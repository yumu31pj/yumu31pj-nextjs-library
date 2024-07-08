export type ResponsiveImageType = {
  srcSP: string;
  srcPC?: string;
  srcWebpPC?: string;
  srcWebpSP?: string;
  widthSP?: number;
  heightSP?: number;
  widthPC?: number;
  heightPC?: number;
  altText: string;
  breakpointsTB?: number;
  breakpointsPC?: number;
}