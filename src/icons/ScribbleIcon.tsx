import * as React from "react";
import type { SVGProps } from "react";
const SvgScribbleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#scribble-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15c2 3 4 4 7 4s7-3 7-7-3-7-6-7-5 1.5-5 4 2 5 6 5 8.408-2.453 10-5"
      />
    </g>
    <defs>
      <clipPath id="scribble-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScribbleIcon;
