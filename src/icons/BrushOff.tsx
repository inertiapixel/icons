import * as React from "react";
import type { SVGProps } from "react";
const SvgBrushOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brush-off_svg__a)"
    >
      <path d="M3 17a4 4 0 1 1 4 4H3z" />
      <path d="M21 3a16 16 0 0 0-9.31 4.704M9.895 9.916A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-4.696 9.302m-2.195 1.786A16 16 0 0 1 10.8 15.8M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="brush-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrushOff;
