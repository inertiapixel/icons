import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodShare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-share_svg__a)"
    >
      <path d="M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01" />
      <path d="M9.5 15c.658.672 1.56 1 2.5 1q.32 0 .63-.05M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="mood-share_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodShare;
