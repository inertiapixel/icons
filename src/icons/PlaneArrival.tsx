import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaneArrival = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plane-arrival_svg__a)"
    >
      <path d="m15.157 11.811 4.83 1.295a1.999 1.999 0 1 1-1.036 3.863L4.462 13.087 3.117 6.515l2.898.776 1.414 2.45 2.898.776-.12-7.279 2.898.777zM3 21h18" />
    </g>
    <defs>
      <clipPath id="plane-arrival_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaneArrival;
