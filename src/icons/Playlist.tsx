import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylist = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playlist_svg__a)"
    >
      <path d="M11 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 17V4h4M13 5H3M3 9h10M9 13H3" />
    </g>
    <defs>
      <clipPath id="playlist_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaylist;
