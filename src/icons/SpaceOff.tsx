import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaceOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#space-off_svg__a)"
    >
      <path d="M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1-1v-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="space-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpaceOff;
