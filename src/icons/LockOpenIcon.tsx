import * as React from "react";
import type { SVGProps } from "react";
const SvgLockOpenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lock-open-icon_svg__a)"
    >
      <path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 11V6a4 4 0 0 1 8 0" />
    </g>
    <defs>
      <clipPath id="lock-open-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLockOpenIcon;
