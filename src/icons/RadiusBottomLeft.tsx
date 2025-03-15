import * as React from "react";
import type { SVGProps } from "react";
const SvgRadiusBottomLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#radius-bottom-left_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 19h-6a8 8 0 0 1-8-8V5"
      />
    </g>
    <defs>
      <clipPath id="radius-bottom-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadiusBottomLeft;
