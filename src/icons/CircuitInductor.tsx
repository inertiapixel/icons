import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitInductor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circuit-inductor_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 14h3v-2a2 2 0 0 1 4 0v2-1.5a2.5 2.5 0 0 1 5 0m0 0V14m0-1.5a2.5 2.5 0 0 1 5 0V14h3"
      />
    </g>
    <defs>
      <clipPath id="circuit-inductor_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitInductor;
