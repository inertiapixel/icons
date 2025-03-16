import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#filter-search-icon_svg__a)"
    >
      <path d="M11.36 20.213 9 21v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4h16v2.172a2 2 0 0 1-.586 1.414L15 12M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20.2 20.2 22 22" />
    </g>
    <defs>
      <clipPath id="filter-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFilterSearchIcon;
