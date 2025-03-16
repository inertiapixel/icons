import * as React from "react";
import type { SVGProps } from "react";
const SvgUrgentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#urgent-icon_svg__a)"
    >
      <path d="M8 16v-4a4 4 0 1 1 8 0v4M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7-.7.7M6 17a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
    </g>
    <defs>
      <clipPath id="urgent-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUrgentIcon;
