import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartExclamation = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-exclamation_svg__a)"
    >
      <path d="m15.031 17-3.03 3-7.5-7.428a5 5 0 1 1 7.5-6.566 4.999 4.999 0 0 1 8.806 4.35 5 5 0 0 1-.884 1.752M19 16v3M19 22v.01" />
    </g>
    <defs>
      <clipPath id="heart-exclamation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartExclamation;
