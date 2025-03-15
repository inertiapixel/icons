import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#globe-off_svg__a)"
    >
      <path d="M7.355 7.353a4 4 0 0 0 5.29 5.293m2.007-2.009a4 4 0 0 0-5.3-5.284M5.75 15a8.015 8.015 0 0 0 9.792.557m2.02-1.998A8.014 8.014 0 0 0 15 2M11 17v4M7 21h8M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="globe-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGlobeOff;
