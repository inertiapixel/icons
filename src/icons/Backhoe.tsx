import * as React from "react";
import type { SVGProps } from "react";
const SvgBackhoe = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#backhoe_svg__a)"
    >
      <path d="M2 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M11 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M13 19H4M4 15h9" />
      <path d="M8 12V7h2a3 3 0 0 1 3 3v5" />
      <path d="M5 15v-2a1 1 0 0 1 1-1h7M21.12 9.88 18 5l-5 5" />
      <path d="M21.119 9.879a3.001 3.001 0 0 1-2.12 5.12 3 3 0 0 1-2.12-.88z" />
    </g>
    <defs>
      <clipPath id="backhoe_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBackhoe;
