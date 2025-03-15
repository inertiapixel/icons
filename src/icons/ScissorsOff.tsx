import * as React from "react";
import type { SVGProps } from "react";
const SvgScissorsOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scissors-off_svg__a)"
    >
      <path d="M4.43 4.441a3 3 0 1 0 4.114 4.146M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M8.602 15.4l3.4-3.4m2-2 5-5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="scissors-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScissorsOff;
