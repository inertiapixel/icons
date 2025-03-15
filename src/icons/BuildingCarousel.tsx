import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingCarousel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-carousel_svg__a)"
    >
      <path d="M6 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0" />
      <path d="M3 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8 22l4-10 4 10" />
    </g>
    <defs>
      <clipPath id="building-carousel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingCarousel;
