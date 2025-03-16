import * as React from "react";
import type { SVGProps } from "react";
const SvgClockShieldIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-shield-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-8.98 9" />
      <path d="M12 7v5l1 1M22 16c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5 1 1 2.5 1.5 3.5 1.5" />
    </g>
    <defs>
      <clipPath id="clock-shield-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockShieldIcon;
