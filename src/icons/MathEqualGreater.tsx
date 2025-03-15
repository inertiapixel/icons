import * as React from "react";
import type { SVGProps } from "react";
const SvgMathEqualGreater = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-equal-greater_svg__a)"
    >
      <path d="m5 18 14-4M5 14l14-4L5 6" />
    </g>
    <defs>
      <clipPath id="math-equal-greater_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathEqualGreater;
