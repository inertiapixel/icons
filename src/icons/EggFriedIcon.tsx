import * as React from "react";
import type { SVGProps } from "react";
const SvgEggFriedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#egg-fried-icon_svg__a)"
    >
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M14.001 3a5 5 0 0 1 4.872 6.13 3 3 0 0 1 .178 5.681 3.001 3.001 0 1 1-4.684 3.626 5 5 0 0 1-9.161-1.205 5 5 0 0 1 .499-3.795 5 5 0 1 1 4.645-8.856 4.98 4.98 0 0 1 3.651-1.585z" />
    </g>
    <defs>
      <clipPath id="egg-fried-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEggFriedIcon;
