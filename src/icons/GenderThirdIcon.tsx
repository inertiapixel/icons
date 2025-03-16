import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderThirdIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-third-icon_svg__a)"
    >
      <path d="M11 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0M11 12H8M8 12 3 8v8z" />
    </g>
    <defs>
      <clipPath id="gender-third-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderThirdIcon;
