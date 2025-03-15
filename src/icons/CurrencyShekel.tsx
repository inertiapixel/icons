import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyShekel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-shekel_svg__a)"
    >
      <path d="M6 18V6h4a4 4 0 0 1 4 4v4" />
      <path d="M18 6v12h-4a4 4 0 0 1-4-4v-4" />
    </g>
    <defs>
      <clipPath id="currency-shekel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyShekel;
