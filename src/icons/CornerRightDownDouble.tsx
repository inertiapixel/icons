import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerRightDownDouble = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#corner-right-down-double_svg__a)"
    >
      <path d="M5 4h6a3 3 0 0 1 3 3v7" />
      <path d="m10 10 4 4 4-4m-8 5 4 4 4-4" />
    </g>
    <defs>
      <clipPath id="corner-right-down-double_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCornerRightDownDouble;
