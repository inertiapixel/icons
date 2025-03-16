import * as React from "react";
import type { SVGProps } from "react";
const SvgCrystalBallIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#crystal-ball-icon_svg__a)"
    >
      <path d="M6.73 17.019a8 8 0 1 1 10.54 0" />
      <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 0-4H7a2 2 0 0 0-2 2M11 7a3 3 0 0 0-3 3" />
    </g>
    <defs>
      <clipPath id="crystal-ball-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrystalBallIcon;
