import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingMonumentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-monument-icon_svg__a)"
    >
      <path d="m8 18 2-13 2-2 2 2 2 13M5 21v-3h14v3M3 21h18" />
    </g>
    <defs>
      <clipPath id="building-monument-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingMonumentIcon;
