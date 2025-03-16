import * as React from "react";
import type { SVGProps } from "react";
const SvgMilkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#milk-icon_svg__a)"
    >
      <path d="M8 6h8V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zM16 6l1.094 1.759a6 6 0 0 1 .906 3.17V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8.071a6 6 0 0 1 .906-3.17L8 6" />
      <path d="M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10 10h4" />
    </g>
    <defs>
      <clipPath id="milk-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMilkIcon;
