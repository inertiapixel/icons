import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderCornerIos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#border-corner-ios_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 20c0-6.559 0-9.838 1.628-12.162a9 9 0 0 1 2.21-2.21C10.162 4 13.44 4 20 4"
      />
    </g>
    <defs>
      <clipPath id="border-corner-ios_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBorderCornerIos;
