import * as React from "react";
import type { SVGProps } from "react";
const SvgTopologyRingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#topology-ring-icon_svg__a)"
    >
      <path d="M14 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M13.5 5.5l5 5M5.5 13.5l5 5M13.5 18.5l5-5M10.5 5.5l-5 5" />
    </g>
    <defs>
      <clipPath id="topology-ring-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTopologyRingIcon;
