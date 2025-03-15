import * as React from "react";
import type { SVGProps } from "react";
const SvgPilcrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pilcrow-right_svg__a)"
    >
      <path d="M11 9H9a3 3 0 1 1 0-6h7M11 3v11M15 3v11M21 18H3M18 15l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="pilcrow-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPilcrowRight;
