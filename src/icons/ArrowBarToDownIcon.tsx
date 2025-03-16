import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBarToDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-bar-to-down-icon_svg__a)"
    >
      <path d="M4 20h16M12 14V4M12 14l4-4M12 14l-4-4" />
    </g>
    <defs>
      <clipPath id="arrow-bar-to-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBarToDownIcon;
