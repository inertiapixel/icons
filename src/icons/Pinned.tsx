import * as React from "react";
import type { SVGProps } from "react";
const SvgPinned = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pinned_svg__a)">
      <path
        fill="currentColor"
        d="M16 3a1 1 0 0 1 .117 1.993L16 5v4.764l1.894 3.789q.078.157.1.331L18 14v2a1 1 0 0 1-.883.993L17 17h-4v4a1 1 0 0 1-1.993.117L11 21v-4H7a1 1 0 0 1-.993-.883L6 16v-2a1 1 0 0 1 .06-.34l.046-.107L8 9.762V5a1 1 0 0 1-.117-1.993L8 3z"
      />
    </g>
    <defs>
      <clipPath id="pinned_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPinned;
