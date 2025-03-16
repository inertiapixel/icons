import * as React from "react";
import type { SVGProps } from "react";
const SvgKarateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#karate-icon_svg__a)"
    >
      <path d="M17 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 9l4.5 1 3 2.5M13 21v-8l3-5.5" />
      <path d="m8 4.5 4 2 4 1 4 3.5-2 3.5" />
    </g>
    <defs>
      <clipPath id="karate-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKarateIcon;
