import * as React from "react";
import type { SVGProps } from "react";
const SvgHangerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hanger-off_svg__a)"
    >
      <path d="M14 6a2 2 0 1 0-4 0m6.506 6.506 3.461 1.922a2 2 0 0 1 1.03 1.749V17m-2 2h-14a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.028-1.749l6.673-3.707M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hanger-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHangerOff;
