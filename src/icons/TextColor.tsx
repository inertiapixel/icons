import * as React from "react";
import type { SVGProps } from "react";
const SvgTextColor = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-color_svg__a)"
    >
      <path d="M9 15V8a3 3 0 1 1 6 0v7M9 11h6M5 19h14" />
    </g>
    <defs>
      <clipPath id="text-color_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextColor;
