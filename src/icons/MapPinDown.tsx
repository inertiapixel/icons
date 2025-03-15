import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinDown = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-pin-down_svg__a)"
    >
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M12.736 21.345a2 2 0 0 1-2.149-.445l-4.244-4.243a8 8 0 1 1 13.59-4.624M19 16v6M22 19l-3 3-3-3" />
    </g>
    <defs>
      <clipPath id="map-pin-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPinDown;
