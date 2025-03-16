import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsShuffleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-shuffle-icon_svg__a)"
    >
      <path d="m18 4 3 3-3 3M18 20l3-3-3-3" />
      <path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5M21 7h-5a4.98 4.98 0 0 0-3 1m-4 8a5 5 0 0 1-3 1H3" />
    </g>
    <defs>
      <clipPath id="arrows-shuffle-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsShuffleIcon;
