import * as React from "react";
import type { SVGProps } from "react";
const SvgLayout1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#layout-1_svg__a)"
    >
      <path d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
    </g>
    <defs>
      <clipPath id="layout-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayout1;
