import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPins = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-pins_svg__a)"
    >
      <path d="M10.828 9.829a4 4 0 1 0-5.656 0L8 12.658zM8 7v.01M18.828 17.829a4 4 0 1 0-5.656 0L16 20.658zM16 15v.01" />
    </g>
    <defs>
      <clipPath id="map-pins_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPins;
