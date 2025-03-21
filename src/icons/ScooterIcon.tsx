import * as React from "react";
import type { SVGProps } from "react";
const SvgScooterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scooter-icon_svg__a)"
    >
      <path d="M16 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M8 17h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1" />
    </g>
    <defs>
      <clipPath id="scooter-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScooterIcon;
