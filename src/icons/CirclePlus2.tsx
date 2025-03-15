import * as React from "react";
import type { SVGProps } from "react";
const SvgCirclePlus2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circle-plus-2_svg__a)"
    >
      <path d="M20.985 12.522a9 9 0 1 0-8.475 8.464M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="circle-plus-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCirclePlus2;
