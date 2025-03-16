import * as React from "react";
import type { SVGProps } from "react";
const SvgTirIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tir-icon_svg__a)"
    >
      <path d="M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18h8m4 0h2v-6m0 0c0-1.857-.527-3.637-1.465-4.95C18.598 5.738 17.327 5 16 5h-1l1.5 7zM12 18V5h3" />
      <path d="M3 17v-5h9" />
    </g>
    <defs>
      <clipPath id="tir-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTirIcon;
