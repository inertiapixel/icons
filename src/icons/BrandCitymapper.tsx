import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCitymapper = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-citymapper_svg__a)"
    >
      <path d="M3 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM21 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM8 12h8M13 9l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="brand-citymapper_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandCitymapper;
