import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hourglass-off-icon_svg__a)"
    >
      <path d="M18 18v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a6 6 0 0 1 6-6M6 6a6 6 0 0 0 6 6m3.13-.88A6 6 0 0 0 18 6V4a1 1 0 0 0-1-1H7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hourglass-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHourglassOffIcon;
