import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinShare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-pin-share_svg__a)"
    >
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M12.019 21.484a2 2 0 0 1-1.433-.586l-4.244-4.242a8 8 0 1 1 13.403-3.651M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="map-pin-share_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPinShare;
