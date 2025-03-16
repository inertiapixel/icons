import * as React from "react";
import type { SVGProps } from "react";
const SvgSteamIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#steam-icon_svg__a)"
    >
      <path d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3" />
    </g>
    <defs>
      <clipPath id="steam-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSteamIcon;
