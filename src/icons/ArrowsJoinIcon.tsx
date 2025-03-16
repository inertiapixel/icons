import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsJoinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-join-icon_svg__a)"
    >
      <path d="M3 7h5l3.5 5H21M3 17h5l3.495-5" />
      <path d="m18 15 3-3-3-3" />
    </g>
    <defs>
      <clipPath id="arrows-join-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsJoinIcon;
