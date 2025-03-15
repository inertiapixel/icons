import * as React from "react";
import type { SVGProps } from "react";
const SvgSubscript = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#subscript_svg__a)"
    >
      <path d="m5 7 8 10m-8 0 8-10M21 20h-4l3.5-4a2.016 2.016 0 0 0-3.5-2" />
    </g>
    <defs>
      <clipPath id="subscript_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSubscript;
