import * as React from "react";
import type { SVGProps } from "react";
const SvgHotelServiceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hotel-service-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 10A1.5 1.5 0 0 1 7 8.5a5.5 5.5 0 1 1 11 0V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2c0-1.38.71-2.444 1.88-3.175l4.424-2.765C14.359 10.4 15 9.744 15 8.5a2.5 2.5 0 0 0-5 0A1.5 1.5 0 0 1 8.5 10"
      />
    </g>
    <defs>
      <clipPath id="hotel-service-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHotelServiceIcon;
