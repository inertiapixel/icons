import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomReplaceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zoom-replace-icon_svg__a)"
    >
      <path d="m21 21-6-6M3.29 8a7 7 0 0 1 5.076-4.807 7.02 7.02 0 0 1 8.242 4.403" />
      <path d="M17 4v4h-4M16.706 12a7 7 0 0 1-5.074 4.798 7.02 7.02 0 0 1-8.241-4.403" />
      <path d="M3 16v-4h4" />
    </g>
    <defs>
      <clipPath id="zoom-replace-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomReplaceIcon;
