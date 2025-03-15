import * as React from "react";
import type { SVGProps } from "react";
const SvgMilitaryAward = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#military-award_svg__a)"
    >
      <path d="M8 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M8.5 10.5 7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5M15.5 10.5l1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5" />
    </g>
    <defs>
      <clipPath id="military-award_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMilitaryAward;
