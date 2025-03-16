import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPicsartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-picsart-icon_svg__a)"
    >
      <path d="M5 9a7 7 0 1 0 14 0A7 7 0 0 0 5 9" />
      <path d="M9 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M5 9v11a2 2 0 0 0 4 0v-4.5" />
    </g>
    <defs>
      <clipPath id="brand-picsart-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandPicsartIcon;
