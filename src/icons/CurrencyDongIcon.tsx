import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDongIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-dong-icon_svg__a)"
    >
      <path d="M6 19h12M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0M16 16V4M17 5h-4" />
    </g>
    <defs>
      <clipPath id="currency-dong-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyDongIcon;
