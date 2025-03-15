import * as React from "react";
import type { SVGProps } from "react";
const SvgSum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sum_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 16v2a1 1 0 0 1-1 1H6l6-7-6-7h11a1 1 0 0 1 1 1v2"
      />
    </g>
    <defs>
      <clipPath id="sum_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSum;
