import * as React from "react";
import type { SVGProps } from "react";
const SvgAlt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alt_svg__a)"
    >
      <path d="M4 16v-6a2 2 0 1 1 4 0v6M4 13h4M11 8v8h4M16 8h4M18 8v8" />
    </g>
    <defs>
      <clipPath id="alt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlt;
