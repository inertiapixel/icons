import * as React from "react";
import type { SVGProps } from "react";
const SvgMonkeybar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#monkeybar_svg__a)"
    >
      <path d="M3 21V6l5-3 5 3v15M8 21v-7M3 14h10" />
      <path d="M6 10a2 2 0 1 1 4 0M13 13c6 0 3 8 8 8" />
    </g>
    <defs>
      <clipPath id="monkeybar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMonkeybar;
