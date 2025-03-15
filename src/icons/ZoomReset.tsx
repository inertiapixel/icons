import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomReset = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zoom-reset_svg__a)"
    >
      <path d="m21 21-6-6M3.27 12.043A7.02 7.02 0 0 0 9.904 17a7.01 7.01 0 0 0 7.043-6.131 7 7 0 0 0-5.314-7.672A7.02 7.02 0 0 0 3.392 7.6" />
      <path d="M3 4v4h4" />
    </g>
    <defs>
      <clipPath id="zoom-reset_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomReset;
