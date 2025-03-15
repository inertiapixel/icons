import * as React from "react";
import type { SVGProps } from "react";
const SvgBarbellOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#barbell-off_svg__a)"
    >
      <path d="M2 12h1M6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2M6.298 6.29A1 1 0 0 0 6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8M9 12h3M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523-.11.704-.29M18 14V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1M22 12h-1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="barbell-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBarbellOff;
