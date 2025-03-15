import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronsRight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chevrons-right_svg__a)"
    >
      <path d="m7 7 5 5-5 5M13 7l5 5-5 5" />
    </g>
    <defs>
      <clipPath id="chevrons-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChevronsRight;
