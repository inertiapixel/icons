import * as React from "react";
import type { SVGProps } from "react";
const SvgBellOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bell-off_svg__a)"
    >
      <path d="M9.346 5.353Q9.661 5.16 10 5a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3m-1 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 1.273-3.707M9 17v1a3 3 0 0 0 6 0v-1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bell-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellOff;
