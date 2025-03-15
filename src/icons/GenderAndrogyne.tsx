import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderAndrogyne = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-androgyne_svg__a)"
    >
      <path d="m13 11 6-6M4 15a5 5 0 1 0 10 0 5 5 0 0 0-10 0M19 9V5h-4M16.5 10.5l-3-3" />
    </g>
    <defs>
      <clipPath id="gender-androgyne_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderAndrogyne;
