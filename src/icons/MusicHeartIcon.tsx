import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicHeartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#music-heart-icon_svg__a)"
    >
      <path d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 17V4h10v7M9 8h10M18 22l3.35-3.284a2.14 2.14 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.07z" />
    </g>
    <defs>
      <clipPath id="music-heart-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMusicHeartIcon;
