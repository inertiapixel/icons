import * as React from "react";
import type { SVGProps } from "react";
const SvgExchange = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#exchange_svg__a)"
    >
      <path d="M3 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M19 8v5a5 5 0 0 1-5 5h-3m0 0 3-3m-3 3 3 3M5 16v-5a5 5 0 0 1 5-5h3m0 0-3-3m3 3-3 3" />
    </g>
    <defs>
      <clipPath id="exchange_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExchange;
