import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightTail = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-right-tail_svg__a)"
    >
      <path d="m18 15 3-3-3-3M3 15l3-3-3-3M6 12h15" />
    </g>
    <defs>
      <clipPath id="arrow-right-tail_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowRightTail;
