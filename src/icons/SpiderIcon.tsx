import * as React from "react";
import type { SVGProps } from "react";
const SvgSpiderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#spider-icon_svg__a)"
    >
      <path d="M5 4v2l5 5M2.5 9.5 4 11h6M4 19v-2l6-6M19 4v2l-5 5M21.5 9.5 20 11h-6M20 19v-2l-6-6" />
      <path d="M8 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M10 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="spider-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpiderIcon;
