import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRippleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-ripple-icon_svg__a)"
    >
      <path d="M4 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M14 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M10 12h3l2-2.5M15 14.5 13 12" />
    </g>
    <defs>
      <clipPath id="currency-ripple-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyRippleIcon;
