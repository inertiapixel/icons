import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bookmarks_svg__a)">
      <path d="M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1-1.514.857L10 19.166l-4.486 2.691a1 1 0 0 1-1.508-.743L4 21V10a4 4 0 0 1 4-4z" />
      <path d="M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1-2 0V6a2 2 0 0 0-2-2h-5a1 1 0 1 1 0-2z" />
    </g>
    <defs>
      <clipPath id="bookmarks_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBookmarks;
