import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderAgenderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-agender-icon_svg__a)"
    >
      <path d="M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0M7 12h11" />
    </g>
    <defs>
      <clipPath id="gender-agender-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderAgenderIcon;
