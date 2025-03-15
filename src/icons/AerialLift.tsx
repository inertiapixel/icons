import * as React from "react";
import type { SVGProps } from "react";
const SvgAerialLift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#aerial-lift_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4 5 16-2m-8 1v10m-7 0h14M6.894 8H17.2c2.45 3 2.45 9-.2 12H6.894c-2.544-3-2.544-9 0-12"
      />
    </g>
    <defs>
      <clipPath id="aerial-lift_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAerialLift;
