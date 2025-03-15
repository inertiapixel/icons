import * as React from "react";
import type { SVGProps } from "react";
const SvgSTurnUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#s-turn-up_svg__a)"
    >
      <path d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
      <path d="M5 17V7.5a3.5 3.5 0 1 1 7 0v9a3.5 3.5 0 1 0 7 0V3" />
      <path d="m16 6 3-3 3 3" />
    </g>
    <defs>
      <clipPath id="s-turn-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSTurnUp;
