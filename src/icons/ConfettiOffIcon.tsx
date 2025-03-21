import * as React from "react";
import type { SVGProps } from "react";
const SvgConfettiOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#confetti-off-icon_svg__a)"
    >
      <path d="M4 5h1M5 5v1M11.5 4 11 6M18 5h2M19 4v2M15 9l-1 1M18 13l2-.5M18 19h1M19 19v1M14.002 16.518 7.484 10l-4.39 9.58a1 1 0 0 0 1.329 1.329zM3 3l18 18" />
    </g>
    <defs>
      <clipPath id="confetti-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConfettiOffIcon;
