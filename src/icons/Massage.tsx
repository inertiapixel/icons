import * as React from "react";
import type { SVGProps } from "react";
const SvgMassage = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#massage_svg__a)"
    >
      <path d="M3 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 22l4-2v-3h12M11 20h9M8 14l3-2 1-4c3 1 3 4 3 6" />
    </g>
    <defs>
      <clipPath id="massage_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMassage;
