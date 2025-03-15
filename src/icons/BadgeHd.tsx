import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeHd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#badge-hd_svg__a)">
      <path
        fill="currentColor"
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-4 4h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m-5 0a1 1 0 0 0-1 1v2H8V9a1 1 0 0 0-.883-.993L7 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-2h1v2a1 1 0 0 0 .883.993L10 16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m5 2a1 1 0 0 1 1 1v2a1 1 0 0 1-.883.993L15 14z"
      />
    </g>
    <defs>
      <clipPath id="badge-hd_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeHd;
