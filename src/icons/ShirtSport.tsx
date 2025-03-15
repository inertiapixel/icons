import * as React from "react";
import type { SVGProps } from "react";
const SvgShirtSport = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shirt-sport_svg__a)"
    >
      <path d="m15 4 6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 1 0 6 0" />
      <path d="M10.5 11H13l-1.5 5" />
    </g>
    <defs>
      <clipPath id="shirt-sport_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShirtSport;
