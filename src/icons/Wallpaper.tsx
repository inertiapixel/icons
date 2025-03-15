import * as React from "react";
import type { SVGProps } from "react";
const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wallpaper_svg__a)"
    >
      <path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6" />
      <path d="M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M8 18V6a2 2 0 1 0-4 0v12" />
    </g>
    <defs>
      <clipPath id="wallpaper_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWallpaper;
