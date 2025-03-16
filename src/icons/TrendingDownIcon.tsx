import * as React from "react";
import type { SVGProps } from "react";
const SvgTrendingDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trending-down-icon_svg__a)"
    >
      <path d="m3 7 6 6 4-4 8 8" />
      <path d="M21 10v7h-7" />
    </g>
    <defs>
      <clipPath id="trending-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrendingDownIcon;
