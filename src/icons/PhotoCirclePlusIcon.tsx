import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoCirclePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-circle-plus-icon_svg__a)"
    >
      <path d="M15 8h.01M20.964 12.806a9 9 0 1 0-8.567 8.185" />
      <path d="m4 15.002 4-4c.928-.893 2.072-.893 3 0l4 4" />
      <path d="m14 14.002 1-1c.928-.893 2.072-.893 3 0M16 19.328h6M19 16.328v6" />
    </g>
    <defs>
      <clipPath id="photo-circle-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoCirclePlusIcon;
