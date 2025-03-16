import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsAngleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brackets-angle-icon_svg__a)"
    >
      <path d="m8 4-5 8 5 8M16 4l5 8-5 8" />
    </g>
    <defs>
      <clipPath id="brackets-angle-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBracketsAngleIcon;
