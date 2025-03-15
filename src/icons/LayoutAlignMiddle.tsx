import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutAlignMiddle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#layout-align-middle_svg__a)">
      <path
        fill="currentColor"
        d="M13 5a3 3 0 0 1 3 3v3h4a1 1 0 0 1 0 2h-4v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3H4a1 1 0 0 1 0-2h4V8a3 3 0 0 1 3-3z"
      />
    </g>
    <defs>
      <clipPath id="layout-align-middle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayoutAlignMiddle;
