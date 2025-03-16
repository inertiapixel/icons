import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkEditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bookmark-edit-icon_svg__a)"
    >
      <path d="m12 17-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4M18.42 15.611a2.1 2.1 0 1 1 2.97 2.97L18 22.001h-3v-3z" />
    </g>
    <defs>
      <clipPath id="bookmark-edit-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBookmarkEditIcon;
