import * as React from "react";
import type { SVGProps } from "react";
const SvgMilitaryRank = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#military-rank_svg__a)"
    >
      <path d="M17 7v13H7V7l5-3z" />
      <path d="m10 13 2-1 2 1M10 17l2-1 2 1M10 9l2-1 2 1" />
    </g>
    <defs>
      <clipPath id="military-rank_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMilitaryRank;
