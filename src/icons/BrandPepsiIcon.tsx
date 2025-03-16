import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPepsiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-pepsi-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M4 16.002c5.713-2.973 11-3.5 13.449-11.162" />
      <path d="M5 17.5c5.118-2.859 15 0 14-11" />
    </g>
    <defs>
      <clipPath id="brand-pepsi-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandPepsiIcon;
