import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsShuffle2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-shuffle-2_svg__a)"
    >
      <path d="m18 4 3 3-3 3M18 20l3-3-3-3" />
      <path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" />
      <path d="M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h5" />
    </g>
    <defs>
      <clipPath id="arrows-shuffle-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsShuffle2;
