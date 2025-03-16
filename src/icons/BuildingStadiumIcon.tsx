import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingStadiumIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-stadium-icon_svg__a)"
    >
      <path d="M4 12c0 .53.843 1.04 2.343 1.414C7.843 13.79 9.878 14 12 14s4.157-.21 5.657-.586C19.157 13.04 20 12.53 20 12s-.843-1.04-2.343-1.414C16.157 10.21 14.122 10 12 10s-4.157.21-5.657.586C4.843 10.96 4 11.47 4 12" />
      <path d="M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435-.225 6-1.07 6-2v-7M15 6h4V3h-4v7M7 6h4V3H7v7" />
    </g>
    <defs>
      <clipPath id="building-stadium-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingStadiumIcon;
