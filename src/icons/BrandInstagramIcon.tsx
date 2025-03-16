import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandInstagramIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-instagram-icon_svg__a)"
    >
      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M16.5 7.5v.01" />
    </g>
    <defs>
      <clipPath id="brand-instagram-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandInstagramIcon;
