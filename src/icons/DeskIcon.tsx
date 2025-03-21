import * as React from "react";
import type { SVGProps } from "react";
const SvgDeskIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#desk-icon_svg__a)"
    >
      <path d="M3 6h18M4 6v13M20 19V6M4 10h16M15 6v8a2 2 0 0 0 2 2h3" />
    </g>
    <defs>
      <clipPath id="desk-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeskIcon;
