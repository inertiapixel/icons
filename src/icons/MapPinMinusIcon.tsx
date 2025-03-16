import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-pin-minus-icon_svg__a)"
    >
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M12.756 21.335a2 2 0 0 1-2.17-.437L6.34 16.655a8 8 0 1 1 12.585-1.652M16 19h6" />
    </g>
    <defs>
      <clipPath id="map-pin-minus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPinMinusIcon;
