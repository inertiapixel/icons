import * as React from "react";
import type { SVGProps } from "react";
const SvgCarCrash = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#car-crash_svg__a)"
    >
      <path d="M8 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M11 11 7 6H3m8 5h1a2 2 0 0 1 2 2v4h-2m-1-6H3m5 6H3m2-6V6M14 8V6M19 12h2M17.5 15.5 19 17M17.5 8.5 19 7" />
    </g>
    <defs>
      <clipPath id="car-crash_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarCrash;
