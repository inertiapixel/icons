import * as React from "react";
import type { SVGProps } from "react";
const SvgPilcrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pilcrow-icon_svg__a)"
    >
      <path d="M13 4v16M17 4v16M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </g>
    <defs>
      <clipPath id="pilcrow-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPilcrowIcon;
