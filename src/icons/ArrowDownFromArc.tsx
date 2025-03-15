import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownFromArc = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-from-arc_svg__a)"
    >
      <path d="M12 15V3M16 7l-4-4-4 4M3 12a9 9 0 0 0 18 0" />
    </g>
    <defs>
      <clipPath id="arrow-down-from-arc_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownFromArc;
