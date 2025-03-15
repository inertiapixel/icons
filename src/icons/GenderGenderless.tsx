import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderGenderless = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gender-genderless_svg__a)"
    >
      <path d="M12 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10M12 10V3M7 15h10" />
    </g>
    <defs>
      <clipPath id="gender-genderless_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGenderGenderless;
