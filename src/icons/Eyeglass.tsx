import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeglass = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eyeglass_svg__a)"
    >
      <path d="M8 4H6L3 14M16 4h2l3 10M10 16h4M21 16.5a3.5 3.5 0 1 1-7 0V14h7zM10 16.5a3.5 3.5 0 1 1-7 0V14h7z" />
    </g>
    <defs>
      <clipPath id="eyeglass_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeglass;
