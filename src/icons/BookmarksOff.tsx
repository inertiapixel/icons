import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarksOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bookmarks-off_svg__a)"
    >
      <path d="M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5-3-5 3V9a2 2 0 0 1 2-2" />
      <path d="M9.266 4A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v10M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bookmarks-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBookmarksOff;
