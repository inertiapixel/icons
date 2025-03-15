import * as React from "react";
import type { SVGProps } from "react";
const SvgPick = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pick_svg__a)"
    >
      <path d="m13 8-9.383 9.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0L16 11" />
      <path d="M9 3h4.586a1 1 0 0 1 .707.293l6.414 6.414a1 1 0 0 1 .293.707V15a2 2 0 0 1-4 0v-3l-5-5H9a2 2 0 1 1 0-4" />
    </g>
    <defs>
      <clipPath id="pick_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPick;
