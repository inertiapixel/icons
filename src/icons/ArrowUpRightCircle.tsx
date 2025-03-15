import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRightCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-up-right-circle_svg__a)"
    >
      <path d="M8.465 15.536 18 6M18 10V6h-4M8.415 15.587a2.002 2.002 0 0 0-3.29.632 2 2 0 1 0 3.29-.632" />
    </g>
    <defs>
      <clipPath id="arrow-up-right-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowUpRightCircle;
