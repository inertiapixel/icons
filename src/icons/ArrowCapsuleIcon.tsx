import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCapsuleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-capsule-icon_svg__a)"
    >
      <path d="M18 15a6 6 0 1 1-12 0V9a6 6 0 1 1 12 0v2" />
      <path d="m15 8 3 3 3-3" />
    </g>
    <defs>
      <clipPath id="arrow-capsule-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowCapsuleIcon;
