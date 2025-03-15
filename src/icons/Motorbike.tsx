import * as React from "react";
import type { SVGProps } from "react";
const SvgMotorbike = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#motorbike_svg__a)"
    >
      <path d="M2 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0M16 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0M6 10h10.5l-4 4h-5l4-4" />
      <path d="M13 6h2l1.5 3 2 4" />
    </g>
    <defs>
      <clipPath id="motorbike_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMotorbike;
