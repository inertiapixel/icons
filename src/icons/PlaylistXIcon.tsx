import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playlist-x-icon_svg__a)"
    >
      <path d="M19 8H5M5 12h7M12 16H5M16 14l4 4M20 14l-4 4" />
    </g>
    <defs>
      <clipPath id="playlist-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaylistXIcon;
