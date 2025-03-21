import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobe1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#globe-1-icon_svg__a)"
    >
      <path d="M7 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M5.75 15a8.017 8.017 0 0 0 13.109-4.447A8.01 8.01 0 0 0 15 2M11 17v4M7 21h8" />
    </g>
    <defs>
      <clipPath id="globe-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGlobe1Icon;
