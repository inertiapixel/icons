import * as React from "react";
import type { SVGProps } from "react";
const SvgVinylIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#vinyl-icon_svg__a)"
    >
      <path d="M16 3.938A9 9 0 1 0 21 12" />
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="m20 4-3.5 10-2.5 2" />
    </g>
    <defs>
      <clipPath id="vinyl-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVinylIcon;
