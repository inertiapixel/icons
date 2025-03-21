import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleChevronsLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circle-chevrons-left-icon_svg__a)"
    >
      <path d="m15 15-3-3 3-3M11 15l-3-3 3-3" />
      <path d="M20.999 12a9 9 0 1 0 0 .265z" />
    </g>
    <defs>
      <clipPath id="circle-chevrons-left-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleChevronsLeftIcon;
