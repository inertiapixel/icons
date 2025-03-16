import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#music-off-icon_svg__a)"
    >
      <path d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M14.419 14.45a3.001 3.001 0 1 0 4.138 4.118M9 17V9m0-4V4h10v11M12 8h7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="music-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMusicOffIcon;
