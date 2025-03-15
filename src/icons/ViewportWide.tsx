import * as React from "react";
import type { SVGProps } from "react";
const SvgViewportWide = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#viewport-wide_svg__a)"
    >
      <path d="M10 12H3m0 0 3-3m-3 3 3 3M14 12h7m0 0-3-3m3 3-3 3M3 6V3h18v3M3 18v3h18v-3" />
    </g>
    <defs>
      <clipPath id="viewport-wide_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewportWide;
