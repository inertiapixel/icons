import * as React from "react";
import type { SVGProps } from "react";
const SvgTractorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tractor-icon_svg__a)"
    >
      <path d="M3 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0M7 15v.01M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10.5 17H17" />
      <path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5" />
      <path d="M18 5h-1a1 1 0 0 0-1 1v4" />
    </g>
    <defs>
      <clipPath id="tractor-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTractorIcon;
