import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#layout-align-center_svg__a)">
      <path
        fill="currentColor"
        d="M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-3v4a1 1 0 0 1-2 0v-4H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3V4a1 1 0 0 1 1-1"
      />
    </g>
    <defs>
      <clipPath id="layout-align-center_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayoutAlignCenter;
