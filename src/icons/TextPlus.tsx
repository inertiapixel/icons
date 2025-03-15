import * as React from "react";
import type { SVGProps } from "react";
const SvgTextPlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-plus_svg__a)"
    >
      <path d="M19 10H5M5 6h14M14 14H5M5 18h6M18 15v6M15 18h6" />
    </g>
    <defs>
      <clipPath id="text-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextPlus;
