import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPolymer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-polymer_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.706 6 3 12l3.706 6h1.059l8.47-12h1.06L21 12l-3.706 6"
      />
    </g>
    <defs>
      <clipPath id="brand-polymer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandPolymer;
