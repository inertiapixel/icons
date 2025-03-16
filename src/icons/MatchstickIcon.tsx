import * as React from "react";
import type { SVGProps } from "react";
const SvgMatchstickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#matchstick-icon_svg__a)"
    >
      <path d="m3 21 14-9M16 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="m16.999 3 3.62 7.29a4.01 4.01 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464z" />
    </g>
    <defs>
      <clipPath id="matchstick-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMatchstickIcon;
