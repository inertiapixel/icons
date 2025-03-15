import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#planet_svg__a)"
    >
      <path d="M18.815 13.58c2.292 2.137 3.546 4 3.092 4.9-.745 1.46-5.783-.26-11.255-3.838-5.47-3.58-9.304-7.665-8.56-9.124.464-.91 2.926-.444 5.803.805" />
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0" />
    </g>
    <defs>
      <clipPath id="planet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlanet;
