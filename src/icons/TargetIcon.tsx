import * as React from "react";
import type { SVGProps } from "react";
const SvgTargetIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#target-icon_svg__a)"
    >
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
    </g>
    <defs>
      <clipPath id="target-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTargetIcon;
