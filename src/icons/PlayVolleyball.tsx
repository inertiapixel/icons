import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayVolleyball = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#play-volleyball_svg__a)"
    >
      <path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path fill="currentColor" d="M20.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      <path d="m2 16 5 1 .5-2.5M11.5 21l2.5-5.5L8.5 12 12 8l3 4 4 2" />
    </g>
    <defs>
      <clipPath id="play-volleyball_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayVolleyball;
