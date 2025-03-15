import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerDownRightDouble = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#corner-down-right-double_svg__a)"
    >
      <path d="M4 5v6a3 3 0 0 0 3 3h7" />
      <path d="m10 10 4 4-4 4m5-8 4 4-4 4" />
    </g>
    <defs>
      <clipPath id="corner-down-right-double_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCornerDownRightDouble;
