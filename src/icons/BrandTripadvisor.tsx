import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTripadvisor = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-tripadvisor_svg__a)"
    >
      <path d="M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M16 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" />
      <path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zM6.5 9A4.5 4.5 0 1 1 3 10.671L2 9z" />
      <path d="m10.5 15.5 1.5 2 1.5-2M9 6.75q3-1 6 0" />
    </g>
    <defs>
      <clipPath id="brand-tripadvisor_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandTripadvisor;
