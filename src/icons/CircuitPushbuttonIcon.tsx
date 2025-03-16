import * as React from "react";
import type { SVGProps } from "react";
const SvgCircuitPushbuttonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circuit-pushbutton-icon_svg__a)"
    >
      <path d="M2 17h2M20 17h2M4 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 11h12M12 11V5" />
    </g>
    <defs>
      <clipPath id="circuit-pushbutton-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircuitPushbuttonIcon;
