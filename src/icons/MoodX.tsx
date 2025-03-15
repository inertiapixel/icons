import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-x_svg__a)"
    >
      <path d="M20.983 12.556a9 9 0 1 0-8.433 8.427M9 10h.01M15 10h.01" />
      <path d="M9.5 15c.658.64 1.56 1 2.5 1q.292 0 .574-.045M21.5 21.5l-5-5M16.5 21.5l5-5" />
    </g>
    <defs>
      <clipPath id="mood-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodX;
