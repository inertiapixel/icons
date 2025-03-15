import * as React from "react";
import type { SVGProps } from "react";
const SvgTextWrap = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-wrap_svg__a)"
    >
      <path d="M4 6h16M4 18h5M4 12h13a3 3 0 0 1 0 6h-4m0 0 2-2m-2 2 2 2" />
    </g>
    <defs>
      <clipPath id="text-wrap_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextWrap;
