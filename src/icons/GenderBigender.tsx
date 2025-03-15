import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderBigender = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-bigender_svg__a)"
    >
      <path d="M7 11a4 4 0 1 0 8 0 4 4 0 0 0-8 0M19 3l-5 5M15 3h4v4M11 16v6M8 19h6" />
    </g>
    <defs>
      <clipPath id="gender-bigender_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderBigender;
