import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodMinus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-minus_svg__a)"
    >
      <path d="M20.48 15.015a9 9 0 1 0-7.956 5.97M9 10h.01M15 10h.01M16 19h6" />
      <path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
    </g>
    <defs>
      <clipPath id="mood-minus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodMinus;
