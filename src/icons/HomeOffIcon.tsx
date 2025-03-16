import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-off-icon_svg__a)"
    >
      <path d="M5 12.001H3l4.497-4.497m2-2L12.001 3l9 9h-2" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="home-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeOffIcon;
