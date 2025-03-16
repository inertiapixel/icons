import * as React from "react";
import type { SVGProps } from "react";
const SvgPhysotherapistIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#physotherapist-icon_svg__a)"
    >
      <path d="m9 15-1-3 4-2 4 1h3.5M3 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0M12 17v-7M8 20h7l1-4 4-2M18 20h3" />
    </g>
    <defs>
      <clipPath id="physotherapist-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhysotherapistIcon;
