import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoEditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-edit-icon_svg__a)"
    >
      <path d="M15 8h.01M11 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
      <path d="m4 15.002 4-4c.928-.893 2.072-.893 3 0l3 3M14 13.998l1-1c.31-.298.644-.497.987-.596M18.42 15.611a2.1 2.1 0 1 1 2.97 2.97L18 22.001h-3v-3z" />
    </g>
    <defs>
      <clipPath id="photo-edit-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoEditIcon;
