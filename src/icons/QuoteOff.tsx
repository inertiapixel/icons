import * as React from "react";
import type { SVGProps } from "react";
const SvgQuoteOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#quote-off_svg__a)"
    >
      <path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m4 4v3q0 4-4 5M19 11h-4m-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6q0 .99-.245 1.798m-1.653 2.29q-.857.6-2.102.912M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="quote-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuoteOff;
