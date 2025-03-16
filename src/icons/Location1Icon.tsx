import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#location-1-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m21 3-6.5 18a.551.551 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
      />
    </g>
    <defs>
      <clipPath id="location-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocation1Icon;
