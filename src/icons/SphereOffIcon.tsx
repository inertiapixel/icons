import * as React from "react";
import type { SVGProps } from "react";
const SvgSphereOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sphere-off-icon_svg__a)"
    >
      <path d="M3 12c0 1.657 4.03 3 9 3 .987 0 1.936-.053 2.825-.15m3.357-.67C19.917 13.633 21 12.86 21 12" />
      <path d="M20.05 16.027A9 9 0 0 0 7.965 3.952m-2.34 1.692a9 9 0 1 0 12.74 12.716M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="sphere-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSphereOffIcon;
