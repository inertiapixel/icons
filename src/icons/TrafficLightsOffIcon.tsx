import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficLightsOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#traffic-lights-off-icon_svg__a)"
    >
      <path d="M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 1 1-10 0V7" />
      <path d="M12 8a1 1 0 1 0-1-1M11.29 11.297a1 1 0 0 0 1.419 1.41M11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="traffic-lights-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrafficLightsOffIcon;
