import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-square-icon_svg__a)"
    >
      <path d="M12 7v14M9 18l3 3 3-3M14 3v4h-4V3z" />
    </g>
    <defs>
      <clipPath id="arrow-down-square-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownSquareIcon;
