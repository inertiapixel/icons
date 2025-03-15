import * as React from "react";
import type { SVGProps } from "react";
const SvgSportBillard = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sport-billard_svg__a)"
    >
      <path d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0" />
    </g>
    <defs>
      <clipPath id="sport-billard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSportBillard;
