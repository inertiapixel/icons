import * as React from "react";
import type { SVGProps } from "react";
const SvgSeparatorHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#separator-horizontal_svg__a)"
    >
      <path d="M4 12h16M8 8l4-4 4 4M16 16l-4 4-4-4" />
    </g>
    <defs>
      <clipPath id="separator-horizontal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSeparatorHorizontal;
