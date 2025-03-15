import * as React from "react";
import type { SVGProps } from "react";
const SvgLockShare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lock-share_svg__a)"
    >
      <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M12 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M8 11V7a4 4 0 0 1 8 0v4M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="lock-share_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLockShare;
