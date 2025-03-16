import * as React from "react";
import type { SVGProps } from "react";
const SvgTextDecreaseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-decrease-icon_svg__a)"
    >
      <path d="M4 19V8.5a3.5 3.5 0 1 1 7 0V19M4 13h7M21 12h-6" />
    </g>
    <defs>
      <clipPath id="text-decrease-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextDecreaseIcon;
