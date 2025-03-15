import * as React from "react";
import type { SVGProps } from "react";
const SvgRating18Plus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rating-18-plus_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M10 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" />
      <path d="M10 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M7 15V9M15.5 12h3M17 10.5v3" />
    </g>
    <defs>
      <clipPath id="rating-18-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRating18Plus;
