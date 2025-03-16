import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyFrankIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-frank-icon_svg__a)"
    >
      <path d="M17 5h-6a2 2 0 0 0-2 2v12M7 15h4M9 11h7" />
    </g>
    <defs>
      <clipPath id="currency-frank-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyFrankIcon;
