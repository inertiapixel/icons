import * as React from "react";
import type { SVGProps } from "react";
const SvgMathMinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-min-icon_svg__a)"
    >
      <path d="M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M3 13s1-9 4-9c2.48 0 5.643 9.565 8.36 12.883M18.746 17.038q1.052-1.32 2.252-8.038" />
    </g>
    <defs>
      <clipPath id="math-min-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathMinIcon;
