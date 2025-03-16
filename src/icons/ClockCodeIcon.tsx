import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-code-icon_svg__a)"
    >
      <path d="M20.931 13.11a9 9 0 1 0-9.453 7.875M20 21l2-2-2-2M17 17l-2 2 2 2" />
      <path d="M12 7v5l2 2" />
    </g>
    <defs>
      <clipPath id="clock-code-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockCodeIcon;
