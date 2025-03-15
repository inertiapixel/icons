import * as React from "react";
import type { SVGProps } from "react";
const SvgBadges = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#badges_svg__a)">
      <path d="M16.486 12.142 12 14.832l-4.486-2.69A1 1 0 0 0 6 13v4a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17v-4a1 1 0 0 0-1.514-.857" />
      <path d="M16.486 3.142 12 5.832l-4.486-2.69A1 1 0 0 0 6 4v4a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 8V4a1 1 0 0 0-1.514-.857" />
    </g>
    <defs>
      <clipPath id="badges_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadges;
