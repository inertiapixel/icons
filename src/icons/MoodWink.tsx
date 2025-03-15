import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodWink = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-wink_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M15 10h.01" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0M8.5 8.5 10 10l-1.5 1.5" />
    </g>
    <defs>
      <clipPath id="mood-wink_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodWink;
