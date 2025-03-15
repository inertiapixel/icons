import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#number_svg__a)"
    >
      <path d="M4 17V7l7 10V7M15 17h5M15 10c0 .796.263 1.559.732 2.121.47.563 1.105.879 1.768.879s1.299-.316 1.768-.879S20 10.796 20 10s-.263-1.559-.732-2.121C18.798 7.316 18.163 7 17.5 7s-1.299.316-1.768.879S15 9.204 15 10" />
    </g>
    <defs>
      <clipPath id="number_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNumber;
