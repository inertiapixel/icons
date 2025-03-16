import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#volume-off-icon_svg__a)"
    >
      <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602A5 5 0 0 1 15 16M17.7 5a9 9 0 0 1 2.361 11.086m-1.676 2.299A9 9 0 0 1 17.7 19M9.069 5.054 9.5 4.5A.8.8 0 0 1 11 5v2m0 4v8a.8.8 0 0 1-1.5.5L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l1.294-1.664M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="volume-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVolumeOffIcon;
