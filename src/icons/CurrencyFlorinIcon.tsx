import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyFlorinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-florin-icon_svg__a)"
    >
      <path d="M8 12h8M7 19c1.213 0 2.31-.723 2.788-1.838l4.424-10.324A3.03 3.03 0 0 1 17 5" />
    </g>
    <defs>
      <clipPath id="currency-florin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyFlorinIcon;
