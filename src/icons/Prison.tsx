import * as React from "react";
import type { SVGProps } from "react";
const SvgPrison = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#prison_svg__a)"
    >
      <path d="M18 4v16M14 4v16M6 4v5M6 15v5M10 4v5M11 9H5v6h6zM10 15v5M7.998 12h-.01" />
    </g>
    <defs>
      <clipPath id="prison_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrison;
