import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodEdit = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-edit_svg__a)"
    >
      <path d="M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01" />
      <path d="M9.5 15c.658.672 1.56 1 2.5 1q.189 0 .376-.018M18.42 15.611a2.1 2.1 0 1 1 2.97 2.97L18 22.001h-3v-3z" />
    </g>
    <defs>
      <clipPath id="mood-edit_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodEdit;
