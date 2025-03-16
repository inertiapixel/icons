import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRhombusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-up-rhombus-icon_svg__a)"
    >
      <path d="M12 16V3M15 6l-3-3-3 3M14.5 18.5 12 21l-2.5-2.5L12 16z" />
    </g>
    <defs>
      <clipPath id="arrow-up-rhombus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowUpRhombusIcon;
