import * as React from "react";
import type { SVGProps } from "react";
const SvgScubaDivingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scuba-diving-icon_svg__a)"
    >
      <path d="M19 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2 2l3 3 1.5 4 3.5 2 6 2 1 4 2.5 3M11 8l4.5 1.5" />
    </g>
    <defs>
      <clipPath id="scuba-diving-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScubaDivingIcon;
