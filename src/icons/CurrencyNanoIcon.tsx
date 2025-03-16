import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyNanoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-nano-icon_svg__a)"
    >
      <path d="M7 20 17 4M7 12h10M7 16h10M17 20 7 4" />
    </g>
    <defs>
      <clipPath id="currency-nano-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyNanoIcon;
