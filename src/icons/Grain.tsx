import * as React from "react";
import type { SVGProps } from "react";
const SvgGrain = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#grain_svg__a)"
    >
      <path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8.5 4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8.5 14.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3.5 19.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M18.5 4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13.5 19.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M18.5 14.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="grain_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrain;
