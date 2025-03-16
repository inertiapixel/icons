import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyTakaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-taka-icon_svg__a)"
    >
      <path d="M15.5 15.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5M8 11h6" />
    </g>
    <defs>
      <clipPath id="currency-taka-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyTakaIcon;
