import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTidal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-tidal_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.667 9.25 5.333 6 2 9.25l3.333 3.25zm0 0L12 6l3.333 3.25m-6.666 0L12 12.5m3.333-3.25L18.667 6 22 9.25l-3.333 3.25zm0 0L12 12.5m0 0 3.333 3.25L12 19l-3.333-3.25z"
      />
    </g>
    <defs>
      <clipPath id="brand-tidal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandTidal;
