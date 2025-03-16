import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-off-icon_svg__a)"
    >
      <path d="M17.669 17.667A12 12 0 0 1 11.999 21a12 12 0 0 1-8.5-15c.794.036 1.583-.006 2.357-.124m3.128-.926A12 12 0 0 0 11.999 3a12 12 0 0 0 8.5 3 12 12 0 0 1-1.116 9.376M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="shield-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldOffIcon;
