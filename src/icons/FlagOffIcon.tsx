import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flag-off-icon_svg__a)"
    >
      <path d="M5 5v16M19 5v9M7.64 3.645A5 5 0 0 1 12 5a5 5 0 0 0 7 0M5 14a5 5 0 0 1 7 0 4.98 4.98 0 0 0 3.437 1.429m3.019-.966q.285-.21.544-.463M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="flag-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlagOffIcon;
