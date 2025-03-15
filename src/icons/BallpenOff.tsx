import * as React from "react";
import type { SVGProps } from "react";
const SvgBallpenOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ballpen-off_svg__a)"
    >
      <path d="m14 6 7 7-2 2M10 10l-4.172 4.172a2.827 2.827 0 1 0 4 4L14 14" />
      <path d="m16 12 4.414-4.414a2 2 0 0 0 0-2.829l-1.171-1.17a2 2 0 0 0-2.829 0L12 8M4 19.999l1.768-1.768M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ballpen-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBallpenOff;
