import * as React from "react";
import type { SVGProps } from "react";
const SvgVariablePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#variable-plus-icon_svg__a)"
    >
      <path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.38 2.76 2 5.52 1.855 8.448M9 9h1c1 0 1 1 2.016 3.527.785 1.972.944 3.008 1.483 3.346" />
      <path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="variable-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVariablePlusIcon;
