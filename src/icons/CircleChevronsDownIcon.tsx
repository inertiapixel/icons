import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleChevronsDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circle-chevrons-down-icon_svg__a)"
    >
      <path d="m15 9-3 3-3-3M15 13l-3 3-3-3" />
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18" />
    </g>
    <defs>
      <clipPath id="circle-chevrons-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleChevronsDownIcon;
