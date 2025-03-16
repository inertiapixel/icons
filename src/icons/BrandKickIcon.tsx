import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandKickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-kick-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4h5v4h3V6h2V4h6v4h-2v2h-2v4h2v2h2v4h-6v-2h-2v-2H9v4H4z"
      />
    </g>
    <defs>
      <clipPath id="brand-kick-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandKickIcon;
