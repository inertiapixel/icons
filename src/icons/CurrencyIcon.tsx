import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-icon_svg__a)"
    >
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3" />
    </g>
    <defs>
      <clipPath id="currency-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyIcon;
