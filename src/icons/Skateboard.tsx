import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboard = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#skateboard_svg__a)"
    >
      <path d="M5 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 9c0 .265.21.52.586.707C3.96 9.895 4.47 10 5 10h14c.53 0 1.04-.105 1.414-.293C20.79 9.52 21 9.265 21 9" />
    </g>
    <defs>
      <clipPath id="skateboard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSkateboard;
