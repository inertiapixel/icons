import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpDeleteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#http-delete-icon_svg__a)"
    >
      <path d="M3 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM14 8h-4v8h4M10 12h2.5M17 8v8h4" />
    </g>
    <defs>
      <clipPath id="http-delete-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHttpDeleteIcon;
