import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderCornerRoundedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#border-corner-rounded-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 20V10a6 6 0 0 1 6-6h10"
      />
    </g>
    <defs>
      <clipPath id="border-corner-rounded-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBorderCornerRoundedIcon;
