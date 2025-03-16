import * as React from "react";
import type { SVGProps } from "react";
const SvgNutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#nut-icon_svg__a)"
    >
      <path d="M19 6.839a2 2 0 0 1 1 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a2 2 0 0 1-1.94 0l-6-3.844A2.01 2.01 0 0 1 4 15.149V8.592c0-.728.394-1.4 1.03-1.753l6-3.582a2.05 2.05 0 0 1 2 0l6 3.582z" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </g>
    <defs>
      <clipPath id="nut-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNutIcon;
