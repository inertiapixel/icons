import * as React from "react";
import type { SVGProps } from "react";
const SvgMickey1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mickey-1_svg__a)"
    >
      <path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7 7 0 0 0-2.423 2.1A3.5 3.5 0 1 1 5.5 3M18.5 3a3.5 3.5 0 1 1-.826 6.902 7 7 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3" />
      <path d="M5 14a7 7 0 1 0 14 0 7 7 0 0 0-14 0" />
    </g>
    <defs>
      <clipPath id="mickey-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMickey1;
