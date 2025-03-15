import * as React from "react";
import type { SVGProps } from "react";
const SvgAirTrafficControl = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#air-traffic-control_svg__a)"
    >
      <path d="M11 3h2M12 3v3M5.997 6H18a2 2 0 0 1 1.916 2.575l-1.8 6A2 2 0 0 1 16.202 16H7.797a2 2 0 0 1-1.916-1.425l-1.8-6A2 2 0 0 1 5.997 6" />
      <path d="M8.5 6 10 16v5M15.5 6 14 16v5" />
    </g>
    <defs>
      <clipPath id="air-traffic-control_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAirTrafficControl;
