import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightRhombus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-right-rhombus_svg__a)"
    >
      <path d="M8 12h13M18 9l3 3-3 3M5.5 9.5 3 12l2.5 2.5L8 12z" />
    </g>
    <defs>
      <clipPath id="arrow-right-rhombus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRightRhombus;
