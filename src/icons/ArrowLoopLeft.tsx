import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLoopLeft = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-loop-left_svg__a)"
    >
      <path d="M13 21V8a4 4 0 1 1 4 4H4" />
      <path d="m8 16-4-4 4-4" />
    </g>
    <defs>
      <clipPath id="arrow-loop-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowLoopLeft;
