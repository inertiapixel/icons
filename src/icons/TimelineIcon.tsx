import * as React from "react";
import type { SVGProps } from "react";
const SvgTimelineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#timeline-icon_svg__a)"
    >
      <path d="m4 16 6-7 5 5 5-6" />
      <path d="M14 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="timeline-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimelineIcon;
