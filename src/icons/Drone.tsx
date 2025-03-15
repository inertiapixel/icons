import * as React from "react";
import type { SVGProps } from "react";
const SvgDrone = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#drone_svg__a)"
    >
      <path d="M10 10h4v4h-4zM10 10 6.5 6.5M9.96 6A3.5 3.5 0 1 0 6 9.96M14 10l3.5-3.5M18 9.96A3.5 3.5 0 1 0 14.04 6M14 14l3.5 3.5M14.04 18A3.5 3.5 0 1 0 18 14.04M10 14l-3.5 3.5M6 14.04A3.5 3.5 0 1 0 9.96 18" />
    </g>
    <defs>
      <clipPath id="drone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDrone;
