import * as React from "react";
import type { SVGProps } from "react";
const SvgAirConditioningIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#air-conditioning-icon_svg__a)"
    >
      <path d="M8 16a3 3 0 0 1-3 3M16 16a3 3 0 0 0 3 3M12 16v4M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M7 13v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
    </g>
    <defs>
      <clipPath id="air-conditioning-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAirConditioningIcon;
