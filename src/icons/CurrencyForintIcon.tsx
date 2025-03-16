import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyForintIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-forint-icon_svg__a)"
    >
      <path d="M11 4H7a3 3 0 0 0-3 3v12M10 11H4M16 4v13a2 2 0 0 0 2 2h2M19 9h-5" />
    </g>
    <defs>
      <clipPath id="currency-forint-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyForintIcon;
