import * as React from "react";
import type { SVGProps } from "react";
const SvgMapUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#map-up-icon_svg__a)"
    >
      <path d="M12 18.5 9 17l-6 3V7l6-3 6 3 6-3v8.5M9 4v13M15 7v7.5M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="map-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapUpIcon;
