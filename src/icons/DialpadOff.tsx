import * as React from "react";
import type { SVGProps } from "react";
const SvgDialpadOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dialpad-off_svg__a)"
    >
      <path d="M7 7H3V3M17 3h4v4h-4zM10 6V3h4v4h-3M3 10h4v4H3zM17 13v-3h4v4h-3M14 14h-4v-4M10 17h4v4h-4zM3 3l18 18" />
    </g>
    <defs>
      <clipPath id="dialpad-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDialpadOff;
