import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingTunnel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-tunnel_svg__a)"
    >
      <path d="M5 21h14a2 2 0 0 0 2-2v-7a9 9 0 1 0-18 0v7a2 2 0 0 0 2 2" />
      <path d="M8 21v-9a4 4 0 1 1 8 0v9M3 17h4M17 17h4M21 12h-4M7 12H3M12 3v5M6 6l3 3M15 9l3-3" />
    </g>
    <defs>
      <clipPath id="building-tunnel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingTunnel;
