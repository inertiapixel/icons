import * as React from "react";
import type { SVGProps } from "react";
const SvgCarGarageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#car-garage-icon_svg__a)"
    >
      <path d="M5 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M5 20H3v-6m0 0 2-5h9l4 5M3 14h15m0 0h1a2 2 0 0 1 2 2v4h-2m-4 0H9m3-6V9M3 6l9-4 9 4" />
    </g>
    <defs>
      <clipPath id="car-garage-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarGarageIcon;
