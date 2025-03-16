import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-check-icon_svg__a)"
    >
      <path d="M15 8h.01M11.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7" />
      <path d="m3 16.002 5-5c.928-.893 2.072-.893 3 0l4 4" />
      <path d="m14 14.002 1-1c.928-.893 2.072-.893 3 0l.5.5M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="photo-check-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoCheckIcon;
