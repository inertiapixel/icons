import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsCross = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-cross_svg__a)"
    >
      <path d="M16 4h4v4M15 9l5-5M4 20l5-5M16 20h4v-4M4 4l16 16" />
    </g>
    <defs>
      <clipPath id="arrows-cross_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsCross;
