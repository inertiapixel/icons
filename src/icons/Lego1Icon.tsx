import * as React from "react";
import type { SVGProps } from "react";
const SvgLego1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lego-1-icon_svg__a)"
    >
      <path d="M9.5 11h.01M14.5 11h.01M9.5 15a3.5 3.5 0 0 0 5 0" />
      <path d="M7 5h1V3h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3v1H7v-1a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3" />
    </g>
    <defs>
      <clipPath id="lego-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLego1Icon;
