import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playlist-off-icon_svg__a)"
    >
      <path d="M14 14a3 3 0 1 0 3 3M17 13V4h4M13 5H9M5 5H3M3 9h6M9 13H3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="playlist-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaylistOffIcon;
