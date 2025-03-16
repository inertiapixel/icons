import * as React from "react";
import type { SVGProps } from "react";
const SvgSunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#sun-icon_svg__a)">
      <path d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1M18.313 16.91l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 1.218-1.567zM7.007 16.992a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0M3.999 11a1 1 0 0 1 .117 1.993L3.999 13h-1a1 1 0 0 1-.117-1.993L2.999 11zM20.999 11a1 1 0 0 1 .117 1.993l-.117.007h-1a1 1 0 0 1-.117-1.993l.117-.007zM6.214 4.81l.094.084.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7A1 1 0 0 1 6.11 4.74zM19.105 4.894a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7" />
    </g>
    <defs>
      <clipPath id="sun-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunIcon;
