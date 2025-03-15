import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flip-horizontal_svg__a)"
    >
      <path d="M3 12h18M7 16h10L7 21zM7 8h10L7 3z" />
    </g>
    <defs>
      <clipPath id="flip-horizontal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlipHorizontal;
