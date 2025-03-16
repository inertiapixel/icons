import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#map-pin-icon_svg__a)">
      <path
        fill="currentColor"
        d="M18.364 4.636a9 9 0 0 1 .203 12.52l-.203.21-4.243 4.241a3 3 0 0 1-4.097.135l-.144-.135-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </g>
    <defs>
      <clipPath id="map-pin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapPinIcon;
