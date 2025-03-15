import * as React from "react";
import type { SVGProps } from "react";
const SvgListSearch = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#list-search_svg__a)"
    >
      <path d="M11 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0M18.5 18.5 21 21M4 6h16M4 12h4M4 18h4" />
    </g>
    <defs>
      <clipPath id="list-search_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListSearch;
