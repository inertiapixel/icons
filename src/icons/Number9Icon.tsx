import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber9Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#number-9-icon_svg__a)"
    >
      <path d="M16 8a4 4 0 1 0-8 0v1a4 4 0 1 0 8 0" />
      <path d="M8 16a4 4 0 1 0 8 0V8" />
    </g>
    <defs>
      <clipPath id="number-9-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNumber9Icon;
