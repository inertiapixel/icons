import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightBar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-right-bar_svg__a)"
    >
      <path d="m18 15 3-3-3-3M3 12h18M3 9v6" />
    </g>
    <defs>
      <clipPath id="arrow-right-bar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRightBar;
