import * as React from "react";
import type { SVGProps } from "react";
const SvgIdOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#id-off-icon_svg__a)"
    >
      <path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455.279-.99.439-1.563.439H6a3 3 0 0 1-3-3V7c0-1.083.573-2.031 1.433-2.559" />
      <path d="M8.174 8.18a2 2 0 1 0 2.646 2.65M15 8h2M16 12h1M7 16h9M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="id-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIdOffIcon;
