import * as React from "react";
import type { SVGProps } from "react";
const SvgPinEnd = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pin-end_svg__a)"
    >
      <path d="M21 11V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M10 13V9h4M14 13l-4-4" />
    </g>
    <defs>
      <clipPath id="pin-end_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPinEnd;
