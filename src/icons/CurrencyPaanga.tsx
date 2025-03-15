import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyPaanga = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-paanga_svg__a)"
    >
      <path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4M17 20v-2M18 6V4M3 6h8M7 6v12" />
    </g>
    <defs>
      <clipPath id="currency-paanga_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyPaanga;
