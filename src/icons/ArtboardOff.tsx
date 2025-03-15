import * as React from "react";
import type { SVGProps } from "react";
const SvgArtboardOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#artboard-off_svg__a)"
    >
      <path d="M12 8h3a1 1 0 0 1 1 1v3M15.716 15.699A1 1 0 0 1 15 16H9a1 1 0 0 1-1-1V9c0-.273.11-.52.287-.7M3 8h1M3 16h1M8 3v1M16 3v1M20 8h1M20 16h1M8 20v1M16 20v1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="artboard-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArtboardOff;
