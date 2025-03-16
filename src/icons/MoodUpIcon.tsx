import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-up-icon_svg__a)"
    >
      <path d="M20.984 12.536a9 9 0 1 0-8.463 8.449M19 22v-6M22 19l-3-3-3 3M9 10h.01M15 10h.01" />
      <path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
    </g>
    <defs>
      <clipPath id="mood-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodUpIcon;
