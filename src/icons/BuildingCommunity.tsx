import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingCommunity = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-community_svg__a)"
    >
      <path d="M13 21v-7L8 9l-5 5v7h5m5 0H8m5 0h8V4a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v6M8 21v-4M13 7v.01M17 7v.01M17 11v.01M17 15v.01" />
    </g>
    <defs>
      <clipPath id="building-community_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingCommunity;
