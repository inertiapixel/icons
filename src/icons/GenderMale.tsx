import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderMale = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-male_svg__a)"
    >
      <path d="M5 14a5 5 0 1 0 10 0 5 5 0 0 0-10 0M19.002 5l-5.4 5.4M19 5h-5M19 5v5" />
    </g>
    <defs>
      <clipPath id="gender-male_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderMale;
