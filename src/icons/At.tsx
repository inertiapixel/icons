import * as React from "react";
import type { SVGProps } from "react";
const SvgAt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#at_svg__a)"
    >
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M16 12v1.5a2.5 2.5 0 1 0 5 0V12a9 9 0 1 0-5.5 8.28" />
    </g>
    <defs>
      <clipPath id="at_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAt;
