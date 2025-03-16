import * as React from "react";
import type { SVGProps } from "react";
const SvgBikeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bike-icon_svg__a)"
    >
      <path d="M2 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M16 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 19v-4l-3-3 5-4 2 3h3M16 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="bike-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBikeIcon;
