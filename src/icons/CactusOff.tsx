import * as React from "react";
import type { SVGProps } from "react";
const SvgCactusOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cactus-off_svg__a)"
    >
      <path d="M6 9v1a3 3 0 0 0 3 3h1M18 8v5a3 3 0 0 1-.129.872m-2.014 2a3 3 0 0 1-.857.124h-1M10 21V10m0-4V5a2 2 0 1 1 4 0v5m0 4v7M7 21h10M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cactus-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCactusOff;
