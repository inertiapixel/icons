import * as React from "react";
import type { SVGProps } from "react";
const SvgLuggage = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#luggage_svg__a)"
    >
      <path d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M6 10h12M6 16h12M9 20v1M15 20v1" />
    </g>
    <defs>
      <clipPath id="luggage_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLuggage;
