import * as React from "react";
import type { SVGProps } from "react";
const SvgStretchingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stretching-icon_svg__a)"
    >
      <path d="M15 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 20l5-.5 1-2M18 20v-5h-5.5L15 8.5l-5.5 1 1.5 2" />
    </g>
    <defs>
      <clipPath id="stretching-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStretchingIcon;
