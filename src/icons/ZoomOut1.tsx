import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOut1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zoom-out-1_svg__a)"
    >
      <path d="M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0M7 10h6M21 21l-6-6" />
    </g>
    <defs>
      <clipPath id="zoom-out-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomOut1;
