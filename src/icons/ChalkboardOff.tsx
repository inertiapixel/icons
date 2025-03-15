import * as React from "react";
import type { SVGProps } from "react";
const SvgChalkboardOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chalkboard-off_svg__a)"
    >
      <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m4 0h10a2 2 0 0 1 2 2v10M17 17v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="chalkboard-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChalkboardOff;
