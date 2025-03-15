import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftRhombus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-left-rhombus_svg__a)"
    >
      <path d="M16 12H3M6 9l-3 3 3 3M18.5 9.5 21 12l-2.5 2.5L16 12z" />
    </g>
    <defs>
      <clipPath id="arrow-left-rhombus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowLeftRhombus;
