import * as React from "react";
import type { SVGProps } from "react";
const SvgMath = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math_svg__a)"
    >
      <path d="M19 5h-7L8 19l-3-6H3M14 13l6 6M14 19l6-6" />
    </g>
    <defs>
      <clipPath id="math_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMath;
