import * as React from "react";
import type { SVGProps } from "react";
const SvgClockExclamationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#clock-exclamation-icon_svg__a)"
    >
      <path d="M20.986 12.5a9 9 0 1 0-5.973 7.98" />
      <path d="M12 7v5l3 3M19 16v3M19 22v.01" />
    </g>
    <defs>
      <clipPath id="clock-exclamation-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClockExclamationIcon;
