import * as React from "react";
import type { SVGProps } from "react";
const SvgWallpaperOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wallpaper-off-icon_svg__a)"
    >
      <path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6" />
      <path d="M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M8 18V8M4.573 4.598A2 2 0 0 0 4 6v12M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="wallpaper-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWallpaperOffIcon;
