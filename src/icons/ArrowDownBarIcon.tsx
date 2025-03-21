import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownBarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-bar-icon_svg__a)"
    >
      <path d="M12 3v18M9 18l3 3 3-3M9 3h6" />
    </g>
    <defs>
      <clipPath id="arrow-down-bar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownBarIcon;
