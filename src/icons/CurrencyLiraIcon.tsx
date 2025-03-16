import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyLiraIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-lira-icon_svg__a)"
    >
      <path d="M10 5v15a7 7 0 0 0 7-7M6 15l8-4M14 7l-8 4" />
    </g>
    <defs>
      <clipPath id="currency-lira-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyLiraIcon;
