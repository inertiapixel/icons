import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitCellPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-cell-plus-icon_svg__a)"
    >
      <path d="M2 12h9M15 12h7M11 5v14M15 9v6M3 5h4M5 3v4" />
    </g>
    <defs>
      <clipPath id="circuit-cell-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitCellPlusIcon;
