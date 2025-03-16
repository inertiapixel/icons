import * as React from "react";
import type { SVGProps } from "react";
const SvgColumnsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#columns-icon_svg__a)"
    >
      <path d="M4 6h5.5M4 10h5.5M4 14h5.5M4 18h5.5M14.5 6H20M14.5 10H20M14.5 14H20M14.5 18H20" />
    </g>
    <defs>
      <clipPath id="columns-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgColumnsIcon;
