import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinCodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-pin-code-icon_svg__a)"
    >
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M11.85 21.479a2 2 0 0 1-1.264-.58l-4.244-4.243a8 8 0 1 1 13.385-3.585M20 21l2-2-2-2M17 17l-2 2 2 2" />
    </g>
    <defs>
      <clipPath id="map-pin-code-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPinCodeIcon;
