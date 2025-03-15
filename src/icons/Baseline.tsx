import * as React from "react";
import type { SVGProps } from "react";
const SvgBaseline = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#baseline_svg__a)"
    >
      <path d="M4 20h16M8 16V8a4 4 0 0 1 8 0v8M8 10h8" />
    </g>
    <defs>
      <clipPath id="baseline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBaseline;
