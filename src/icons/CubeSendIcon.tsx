import * as React from "react";
import type { SVGProps } from "react";
const SvgCubeSendIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cube-send-icon_svg__a)"
    >
      <path d="m16 12.5-5-3 5-3 5 3V15l-5 3z" />
      <path d="M11 9.5V15l5 3M16 12.546l5-3.03M7 9H2M7 12H4M7 15H6" />
    </g>
    <defs>
      <clipPath id="cube-send-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubeSendIcon;
