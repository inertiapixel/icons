import * as React from "react";
import type { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cross_svg__a)">
      <path
        fill="currentColor"
        d="m10 2-.117.007A1 1 0 0 0 9 3v4H5a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 5 13h4v8a1 1 0 0 0 1 1h4l.117-.007A1 1 0 0 0 15 21v-8h4a1 1 0 0 0 1-1V8l-.007-.117A1 1 0 0 0 19 7h-4V3a1 1 0 0 0-1-1z"
      />
    </g>
    <defs>
      <clipPath id="cross_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCross;
