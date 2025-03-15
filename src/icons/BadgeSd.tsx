import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeSd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#badge-sd_svg__a)">
      <path
        fill="currentColor"
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-4 4h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3M9.25 8H8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H7.967l-.025-.087A1 1 0 0 0 6 14.25c0 .966.784 1.75 1.75 1.75H9a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H8v-1h1.032l.026.087A1 1 0 0 0 11 9.75 1.75 1.75 0 0 0 9.25 8M15 10a1 1 0 0 1 1 1v2a1 1 0 0 1-.883.993L15 14z"
      />
    </g>
    <defs>
      <clipPath id="badge-sd_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeSd;
