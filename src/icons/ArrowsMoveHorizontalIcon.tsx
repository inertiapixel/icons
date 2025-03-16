import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsMoveHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-move-horizontal-icon_svg__a)"
    >
      <path d="m18 9 3 3-3 3M15 12h6M6 9l-3 3 3 3M3 12h6" />
    </g>
    <defs>
      <clipPath id="arrows-move-horizontal-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsMoveHorizontalIcon;
