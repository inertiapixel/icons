import * as React from "react";
import type { SVGProps } from "react";
const SvgNews = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#news_svg__a)"
    >
      <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3zM8 8h4M8 12h4M8 16h4" />
    </g>
    <defs>
      <clipPath id="news_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNews;
