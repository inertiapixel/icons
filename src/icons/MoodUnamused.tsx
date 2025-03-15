import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodUnamused = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-unamused_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M11 16l4-1.5" />
      <path d="M10 10c-.5-1-2.5-1-3 0M17 10c-.5-1-2.5-1-3 0" />
    </g>
    <defs>
      <clipPath id="mood-unamused_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodUnamused;
