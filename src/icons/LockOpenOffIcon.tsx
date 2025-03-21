import * as React from "react";
import type { SVGProps } from "react";
const SvgLockOpenOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lock-open-off-icon_svg__a)"
    >
      <path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h4" />
      <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 11.001v-3m.347-3.63A4 4 0 0 1 16 6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="lock-open-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLockOpenOffIcon;
