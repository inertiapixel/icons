import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitchHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#switch-horizontal_svg__a)"
    >
      <path d="m16 3 4 4-4 4M10 7h10M8 13l-4 4 4 4M4 17h9" />
    </g>
    <defs>
      <clipPath id="switch-horizontal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwitchHorizontal;
