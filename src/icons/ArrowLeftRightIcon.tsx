import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-left-right-icon_svg__a)"
    >
      <path d="m17 13 4-4-4-4M7 13 3 9l4-4" />
      <path d="M12 14a5 5 0 0 1 5-5h4M12 19v-5a5 5 0 0 0-5-5H3" />
    </g>
    <defs>
      <clipPath id="arrow-left-right-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowLeftRightIcon;
