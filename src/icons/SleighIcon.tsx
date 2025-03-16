import * as React from "react";
import type { SVGProps } from "react";
const SvgSleighIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sleigh-icon_svg__a)"
    >
      <path d="M3 19h15a4 4 0 0 0 4-4M16 15H7a4 4 0 0 1-4-4V5l1.243 1.243A6 6 0 0 0 8.485 8H12v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 1 1 3 0V12a3 3 0 0 1-3 3M15 15v4M7 15v4" />
    </g>
    <defs>
      <clipPath id="sleigh-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSleighIcon;
