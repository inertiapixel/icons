import * as React from "react";
import type { SVGProps } from "react";
const SvgArtboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#artboard_svg__a)">
      <path d="M15 7H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M3.999 7a1 1 0 0 1 .117 1.993L3.999 9h-1a1 1 0 0 1-.117-1.993L2.999 7zM3.999 15a1 1 0 0 1 .117 1.993L3.999 17h-1a1 1 0 0 1-.117-1.993L2.999 15zM8 2a1 1 0 0 1 .993.883L9 3v1a1 1 0 0 1-1.993.117L7 4V3a1 1 0 0 1 1-1M16 2a1 1 0 0 1 .993.883L17 3v1a1 1 0 0 1-1.993.117L15 4V3a1 1 0 0 1 1-1M20.999 7a1 1 0 0 1 .117 1.993L20.999 9h-1a1 1 0 0 1-.117-1.993L19.999 7zM20.999 15a1 1 0 0 1 .117 1.993l-.117.007h-1a1 1 0 0 1-.117-1.993l.117-.007zM8 19a1 1 0 0 1 .993.883L9 20v1a1 1 0 0 1-1.993.117L7 21v-1a1 1 0 0 1 1-1M16 19a1 1 0 0 1 .993.883L17 20v1a1 1 0 0 1-1.993.117L15 21v-1a1 1 0 0 1 1-1" />
    </g>
    <defs>
      <clipPath id="artboard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArtboard;
