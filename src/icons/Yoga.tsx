import * as React from "react";
import type { SVGProps } from "react";
const SvgYoga = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#yoga_svg__a)"
    >
      <path d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 20h4l1.5-3M17 20l-1-5h-5l1-7" />
      <path d="m4 10 4-1 4-1 4 1.5 4 1.5" />
    </g>
    <defs>
      <clipPath id="yoga_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYoga;
