import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-right-circle_svg__a)"
    >
      <path d="m18 15 3-3-3-3M3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 12h14" />
    </g>
    <defs>
      <clipPath id="arrow-right-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRightCircle;
