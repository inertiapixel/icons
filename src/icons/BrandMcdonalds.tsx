import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMcdonalds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-mcdonalds_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 20c0-3.952-.966-16-4.038-16S12 13.087 12 18.756C12 13.087 11.104 4 8.038 4 4.973 4 4 16.048 4 20"
      />
    </g>
    <defs>
      <clipPath id="brand-mcdonalds_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMcdonalds;
