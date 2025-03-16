import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaneTiltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#plane-tilt-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.5 6.5 3-2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3L20 17l-2.5 2.55L14 13l-3 3v3l-2 2-1.5-4.5L3 15l2-2h3l3-3-6.5-3.5L7 4z"
      />
    </g>
    <defs>
      <clipPath id="plane-tilt-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaneTiltIcon;
