import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldPauseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-pause-icon_svg__a)"
    >
      <path d="M13.003 20.692q-.494.176-1.004.308a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3 12 12 0 0 1-.081 7.034M17 17v5M21 17v5" />
    </g>
    <defs>
      <clipPath id="shield-pause-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldPauseIcon;
