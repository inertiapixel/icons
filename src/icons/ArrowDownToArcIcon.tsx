import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownToArcIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-to-arc-icon_svg__a)"
    >
      <path d="M12 3v12M16 11l-4 4-4-4" />
      <path d="M3 12a9 9 0 0 0 18 0" />
    </g>
    <defs>
      <clipPath id="arrow-down-to-arc-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownToArcIcon;
