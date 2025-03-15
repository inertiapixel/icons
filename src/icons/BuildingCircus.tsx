import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingCircus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-circus_svg__a)"
    >
      <path d="M4 11h16M12 6.5c0 1-5 4.5-8 4.5M12 6.5c0 1 5 4.5 8 4.5M6 11q-.5 8-2 10h4c1 0 4-4 4-9v-1M18 11q.5 8 2 10h-4c-1 0-4-4-4-9v-1" />
      <path d="M12 7V3l2 1h-2" />
    </g>
    <defs>
      <clipPath id="building-circus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingCircus;
