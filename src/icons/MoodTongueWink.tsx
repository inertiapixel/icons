import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodTongueWink = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-tongue-wink_svg__a)"
    >
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M9 10h.01" />
      <path d="M10 14v2a2 2 0 0 0 4 0v-2M15.5 14h-7M17 10c-.5-1-2.5-1-3 0" />
    </g>
    <defs>
      <clipPath id="mood-tongue-wink_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodTongueWink;
