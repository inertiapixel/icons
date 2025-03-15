import * as React from "react";
import type { SVGProps } from "react";
const SvgGrillSpatula = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#grill-spatula_svg__a)"
    >
      <path d="m10.2 10.2 6.3 6.3M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1-2.773 2.771l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.771M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1-4.1L7 3z" />
    </g>
    <defs>
      <clipPath id="grill-spatula_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrillSpatula;
