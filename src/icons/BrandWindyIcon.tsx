import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandWindyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-windy-icon_svg__a)"
    >
      <path d="M9.002 4c0 5.5-.33 16 4 16s7.546-11.27 8-13" />
      <path d="M3 4c.253 5.44 1.449 16 5.894 16C13.338 20 17.314 9.964 18 6" />
    </g>
    <defs>
      <clipPath id="brand-windy-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandWindyIcon;
