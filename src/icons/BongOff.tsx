import * as React from "react";
import type { SVGProps } from "react";
const SvgBongOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bong-off_svg__a)"
    >
      <path d="M9 5V3h4v6m1.5 1.5L17 8l2 2-2.5 2.5m-.5 3.505a5 5 0 1 1-7-4.589V9M8 3h6M6.102 17h9.8M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bong-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBongOff;
