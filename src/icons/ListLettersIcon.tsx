import * as React from "react";
import type { SVGProps } from "react";
const SvgListLettersIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#list-letters-icon_svg__a)"
    >
      <path d="M11 6h9M11 12h9M11 18h9M4 10V5.5a1.5 1.5 0 0 1 3 0V10M4 8h3M5.5 17a1.5 1.5 0 1 1 0 3H4v-6h1.5a1.5 1.5 0 1 1 0 3m0 0H4" />
    </g>
    <defs>
      <clipPath id="list-letters-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListLettersIcon;
