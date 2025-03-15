import * as React from "react";
import type { SVGProps } from "react";
const SvgMultiplier15X = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#multiplier-1-5x_svg__a)"
    >
      <path d="M4 16V8l-2 2M10 16h2a2 2 0 0 0 0-4h-2V8h4M7 16v.01M17 16l4-4M21 16l-4-4" />
    </g>
    <defs>
      <clipPath id="multiplier-1-5x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMultiplier15X;
