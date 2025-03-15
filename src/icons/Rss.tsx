import * as React from "react";
import type { SVGProps } from "react";
const SvgRss = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rss_svg__a)"
    >
      <path d="M4 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9" />
    </g>
    <defs>
      <clipPath id="rss_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRss;
