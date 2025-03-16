import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterEditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#filter-edit-icon_svg__a)"
    >
      <path d="M10.97 20.344 9 21v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4h16v2.172a2 2 0 0 1-.586 1.414L15 12v1.5M18.42 15.611a2.1 2.1 0 1 1 2.97 2.97L18 22.001h-3v-3z" />
    </g>
    <defs>
      <clipPath id="filter-edit-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFilterEditIcon;
