import * as React from "react";
import type { SVGProps } from "react";
const SvgStairsUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stairs-up-icon_svg__a)"
    >
      <path d="M22 6h-5v5h-5v5H7v5H2M6 10V3M3 6l3-3 3 3" />
    </g>
    <defs>
      <clipPath id="stairs-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStairsUpIcon;
