import * as React from "react";
import type { SVGProps } from "react";
const SvgBleach = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bleach_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19"
      />
    </g>
    <defs>
      <clipPath id="bleach_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBleach;
