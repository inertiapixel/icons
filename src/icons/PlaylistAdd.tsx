import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaylistAdd = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playlist-add_svg__a)"
    >
      <path d="M19 8H5M5 12h9M11 16H5M15 16h6M18 13v6" />
    </g>
    <defs>
      <clipPath id="playlist-add_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaylistAdd;
