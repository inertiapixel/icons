import * as React from "react";
import type { SVGProps } from "react";
const SvgBallpen1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ballpen-1_svg__a)"
    >
      <path d="m14 6 7 7-4 4" />
      <path d="M5.829 18.172a2.827 2.827 0 0 0 4 0L20.415 7.586a2 2 0 0 0 0-2.829l-1.171-1.17a2 2 0 0 0-2.83 0L5.83 14.171a2.83 2.83 0 0 0 0 4M4 19.999l1.768-1.768" />
    </g>
    <defs>
      <clipPath id="ballpen-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBallpen1;
