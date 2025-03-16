import * as React from "react";
import type { SVGProps } from "react";
const SvgTankIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tank-icon_svg__a)"
    >
      <path d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 0 6H5a3 3 0 0 1-3-3M6 12l1-5h5l3 5M21 9h-7.8" />
    </g>
    <defs>
      <clipPath id="tank-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTankIcon;
