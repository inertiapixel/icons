import * as React from "react";
import type { SVGProps } from "react";
const SvgFishHookIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fish-hook-icon_svg__a)"
    >
      <path d="M16 9v6a5 5 0 1 1-10 0v-4l3 3" />
      <path d="M14 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 5V3" />
    </g>
    <defs>
      <clipPath id="fish-hook-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFishHookIcon;
