import * as React from "react";
import type { SVGProps } from "react";
const SvgCropIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#crop-icon_svg__a)"
    >
      <path d="M8 5v10a1 1 0 0 0 1 1h10" />
      <path d="M5 8h10a1 1 0 0 1 1 1v10" />
    </g>
    <defs>
      <clipPath id="crop-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCropIcon;
