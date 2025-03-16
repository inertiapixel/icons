import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brackets-icon_svg__a)"
    >
      <path d="M8 4H5v16h3M16 4h3v16h-3" />
    </g>
    <defs>
      <clipPath id="brackets-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBracketsIcon;
