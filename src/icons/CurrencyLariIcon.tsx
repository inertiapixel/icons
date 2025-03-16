import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyLariIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-lari-icon_svg__a)"
    >
      <path d="M18 13a6 6 0 1 0-6 6M6 19h12M10 5v7M14 12V5" />
    </g>
    <defs>
      <clipPath id="currency-lari-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyLariIcon;
