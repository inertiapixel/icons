import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpOptionsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#http-options-icon_svg__a)"
    >
      <path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2M10 12h2a2 2 0 0 0 0-4h-2v8M17 8h4M19 8v8" />
    </g>
    <defs>
      <clipPath id="http-options-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHttpOptionsIcon;
