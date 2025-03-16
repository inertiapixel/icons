import * as React from "react";
import type { SVGProps } from "react";
const SvgTextOrientationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-orientation-icon_svg__a)"
    >
      <path d="m9.002 15.002-5-5c-1.367-1.367-1.367-3.633 0-5s3.633-1.367 5 0l5 5M5.5 11.5l5-5M21 12l-9 9M21 12v4M21 12h-4" />
    </g>
    <defs>
      <clipPath id="text-orientation-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextOrientationIcon;
