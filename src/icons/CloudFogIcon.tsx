import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudFogIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cloud-fog-icon_svg__a)"
    >
      <path d="M7.001 16a4.82 4.82 0 0 1-3.326-1.319A4.4 4.4 0 0 1 2.297 11.5c0-1.193.496-2.338 1.378-3.182A4.82 4.82 0 0 1 7 7c.295-1.313 1.157-2.466 2.397-3.207s2.756-1.008 4.215-.743c1.458.265 2.74 1.041 3.563 2.157s1.12 2.48.825 3.793h1a3.5 3.5 0 1 1 0 7zM5 20h14" />
    </g>
    <defs>
      <clipPath id="cloud-fog-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudFogIcon;
