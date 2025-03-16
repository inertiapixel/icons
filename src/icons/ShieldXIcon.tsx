import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-x-icon_svg__a)"
    >
      <path d="M13.25 20.601Q12.64 20.834 12 21a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3 12 12 0 0 1-.19 7.357M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="shield-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldXIcon;
