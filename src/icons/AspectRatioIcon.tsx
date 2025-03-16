import * as React from "react";
import type { SVGProps } from "react";
const SvgAspectRatioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#aspect-ratio-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M9 7a1 1 0 0 1 .117 1.993L9 9H7v2a1 1 0 0 1-.883.993L6 12a1 1 0 0 1-.993-.883L5 11V8a1 1 0 0 1 .883-.993L6 7zm9 5a1 1 0 0 1 .993.883L19 13v3a1 1 0 0 1-.883.993L18 17h-3a1 1 0 0 1-.117-1.993L15 15h2v-2a1 1 0 0 1 .883-.993z"
      />
    </g>
    <defs>
      <clipPath id="aspect-ratio-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAspectRatioIcon;
