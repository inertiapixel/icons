import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brush_svg__a)"
    >
      <path d="M3 21v-4a4 4 0 1 1 4 4z" />
      <path d="M21 3A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-10.2 12.8" />
      <path d="M10.602 9a9 9 0 0 1 4.4 4.4" />
    </g>
    <defs>
      <clipPath id="brush_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrush;
