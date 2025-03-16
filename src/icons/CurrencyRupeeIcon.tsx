import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRupeeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-rupee-icon_svg__a)"
    >
      <path d="M18 5H7h3a4 4 0 1 1 0 8H7l6 6M7 9h11" />
    </g>
    <defs>
      <clipPath id="currency-rupee-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyRupeeIcon;
