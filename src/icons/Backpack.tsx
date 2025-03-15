import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#backpack_svg__a)"
    >
      <path d="M5 18v-6a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3M10 6V5a2 2 0 1 1 4 0v1" />
      <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M11 10h2" />
    </g>
    <defs>
      <clipPath id="backpack_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBackpack;
