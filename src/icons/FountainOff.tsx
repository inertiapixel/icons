import * as React from "react";
import type { SVGProps } from "react";
const SvgFountainOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fountain-off_svg__a)"
    >
      <path d="M9 16v-5a2 2 0 0 0-4 0M15 16v-1m0-4a2 2 0 1 1 4 0M12 16v-4m0-4V6a3 3 0 0 1 6 0M7.45 3.43A3 3 0 0 1 11.997 6M20 16h1v1m-.871 3.114A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3v-2h13M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="fountain-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFountainOff;
