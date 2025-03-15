import * as React from "react";
import type { SVGProps } from "react";
const SvgViewportNarrow = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#viewport-narrow_svg__a)"
    >
      <path d="M3 12h7m0 0L7 9m3 3-3 3M21 12h-7m0 0 3-3m-3 3 3 3M9 6V3h6v3M9 18v3h6v-3" />
    </g>
    <defs>
      <clipPath id="viewport-narrow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgViewportNarrow;
