import * as React from "react";
import type { SVGProps } from "react";
const SvgPacmanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pacman-icon_svg__a)"
    >
      <path d="M5.635 5.637a9 9 0 0 1 13.397.747L13.412 12l5.62 5.617A9 9 0 1 1 5.635 5.637" />
      <path fill="currentColor" d="M11.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </g>
    <defs>
      <clipPath id="pacman-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPacmanIcon;
