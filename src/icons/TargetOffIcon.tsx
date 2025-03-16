import * as React from "react";
import type { SVGProps } from "react";
const SvgTargetOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#target-off-icon_svg__a)"
    >
      <path d="M11.287 11.3a1 1 0 1 0 1.41 1.42" />
      <path d="M8.44 8.49a5 5 0 0 0 7.098 7.045m1.377-2.611a5 5 0 0 0-5.846-5.836" />
      <path d="M5.647 5.624a9 9 0 1 0 12.698 12.758m1.683-2.313A9 9 0 0 0 7.952 3.959M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="target-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTargetOffIcon;
