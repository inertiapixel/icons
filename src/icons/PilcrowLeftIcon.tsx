import * as React from "react";
import type { SVGProps } from "react";
const SvgPilcrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pilcrow-left-icon_svg__a)"
    >
      <path d="M11 9H9a3 3 0 1 1 0-6h7M11 3v11M15 3v11M3 18h18M6 15l-3 3 3 3" />
    </g>
    <defs>
      <clipPath id="pilcrow-left-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPilcrowLeftIcon;
