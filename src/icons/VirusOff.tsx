import * as React from "react";
import type { SVGProps } from "react";
const SvgVirusOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#virus-off_svg__a)"
    >
      <path d="m3 3 18 18M8.469 8.46a5 5 0 0 0 7.058 7.085M16.912 12.937a5 5 0 0 0-5.826-5.853M12 7V3M11 3h2M15.535 8.465l2.828-2.828M17.656 4.93l1.414 1.414M17 12h4M21 11v2M18.363 18.363l-.707.707M12 17v4M13 21h-2M8.466 15.535l-2.83 2.828M6.343 19.07 4.93 17.656M7 12H3M3 13v-2M5.637 5.637l-.707.707" />
    </g>
    <defs>
      <clipPath id="virus-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVirusOff;
