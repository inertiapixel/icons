import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderIntergender = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-intergender_svg__a)"
    >
      <path d="M13.5 11.5 20 18v-4M11.5 13.5 18 20M9 4a5 5 0 1 1 0 10A5 5 0 0 1 9 4M14 20l2-2" />
    </g>
    <defs>
      <clipPath id="gender-intergender_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderIntergender;
