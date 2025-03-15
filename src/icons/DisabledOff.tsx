import * as React from "react";
import type { SVGProps } from "react";
const SvgDisabledOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#disabled-off_svg__a)"
    >
      <path d="M11 7a2 2 0 1 0-2-2M11 11v4h4l4 5M15 11h1M7.001 11.5a5 5 0 1 0 6 7.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="disabled-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDisabledOff;
