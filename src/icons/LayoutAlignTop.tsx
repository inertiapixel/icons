import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#layout-align-top_svg__a)">
      <path d="M20 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2zM13 7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z" />
    </g>
    <defs>
      <clipPath id="layout-align-top_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayoutAlignTop;
