import * as React from "react";
import type { SVGProps } from "react";
const SvgTrees = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trees_svg__a)"
    >
      <path d="m16 5 3 3-2 1 4 4-3 1 4 4h-9M15 21v-3M8 13l-2-2M8 12l2-2M8 21V8M5.823 15.999a3 3 0 0 1-2.743-3.69 3 3 0 0 1 .304-4.834A3 3 0 0 1 8 3.768a3 3 0 0 1 4.614 3.707 3 3 0 0 1 .305 4.834A3 3 0 0 1 10 16.003H6z" />
    </g>
    <defs>
      <clipPath id="trees_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrees;
