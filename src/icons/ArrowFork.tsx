import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowFork = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-fork_svg__a)"
    >
      <path d="M16 3h5v5M8 3H3v5" />
      <path d="m21 3-7.536 7.536A5 5 0 0 0 12 14.07V21M3 3l7.536 7.536A5 5 0 0 1 12 14.07V15" />
    </g>
    <defs>
      <clipPath id="arrow-fork_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowFork;
