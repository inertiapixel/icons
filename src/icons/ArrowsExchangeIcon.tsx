import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsExchangeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-exchange-icon_svg__a)"
    >
      <path d="M7 10h14l-4-4M17 14H3l4 4" />
    </g>
    <defs>
      <clipPath id="arrows-exchange-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsExchangeIcon;
