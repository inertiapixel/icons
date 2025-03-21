import * as React from "react";
import type { SVGProps } from "react";
const SvgBulbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bulb-icon_svg__a)">
      <path d="M3.999 11a1 1 0 0 1 .117 1.993L3.999 13h-1a1 1 0 0 1-.117-1.993L2.999 11zM12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1M20.999 11a1 1 0 0 1 .117 1.993l-.117.007h-1a1 1 0 0 1-.117-1.993l.117-.007zM4.894 4.894a1 1 0 0 1 1.32-.083l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 0-1.414M17.691 4.893a1 1 0 0 1 1.497 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1 3 3 0 0 1-6 0 1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8 1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6" />
    </g>
    <defs>
      <clipPath id="bulb-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBulbIcon;
