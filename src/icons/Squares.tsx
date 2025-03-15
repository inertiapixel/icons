import * as React from "react";
import type { SVGProps } from "react";
const SvgSquares = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#squares_svg__a)">
      <path d="M19 7a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3z" />
      <path d="M14 2a3 3 0 0 1 3 2.999L10 5a5 5 0 0 0-5 5l-.001 7-.175-.005A3 3 0 0 1 2 14V5a3 3 0 0 1 3-3z" />
    </g>
    <defs>
      <clipPath id="squares_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSquares;
