import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowIterationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-iteration-icon_svg__a)"
    >
      <path d="M8.5 16A5.5 5.5 0 1 0 3 10.5v.5M3 16h18M18 13l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="arrow-iteration-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowIterationIcon;
