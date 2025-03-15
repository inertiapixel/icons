import * as React from "react";
import type { SVGProps } from "react";
const SvgWeight = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#weight_svg__a)"
    >
      <path d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M6.836 9h10.33a1 1 0 0 1 .984.821l1.637 9A1 1 0 0 1 18.803 20H5.2a1 1 0 0 1-.984-1.179l1.637-9A1 1 0 0 1 6.836 9" />
    </g>
    <defs>
      <clipPath id="weight_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeight;
