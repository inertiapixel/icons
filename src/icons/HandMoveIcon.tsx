import * as React from "react";
import type { SVGProps } from "react";
const SvgHandMoveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hand-move-icon_svg__a)"
    >
      <path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12M11 11.5v-2a1.5 1.5 0 1 1 3 0V12M14 10.5a1.5 1.5 0 1 1 3 0V12" />
      <path d="M16.998 11.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7l-.196-.3q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L7.998 13M2.54 5.595A13.5 13.5 0 0 1 5 4.168M14 3.457a13.4 13.4 0 0 1 3.685 1.612" />
    </g>
    <defs>
      <clipPath id="hand-move-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandMoveIcon;
