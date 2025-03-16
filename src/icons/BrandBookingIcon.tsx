import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBookingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-booking-icon_svg__a)"
    >
      <path d="M4 18V8.5A4.5 4.5 0 0 1 8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5H6a2 2 0 0 1-2-2" />
      <path d="M8 12h3.5a2 2 0 0 1 0 4H8V9a1 1 0 0 1 1-1h1.5a2 2 0 0 1 0 4H9M16 16h.01" />
    </g>
    <defs>
      <clipPath id="brand-booking-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBookingIcon;
