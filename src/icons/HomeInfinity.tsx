import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeInfinity = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-infinity_svg__a)"
    >
      <path d="M19 14v-2h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h2.5" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.75 1.032M15.536 17.586a2.123 2.123 0 0 0-2.93 0 1.95 1.95 0 0 0 0 2.828c.81.781 2.12.781 2.93 0m0 0c-.805.778.809-.781 0 0m0 0 1.46-1.41 1.46-1.419" />
      <path d="M15.54 17.58 17 19l1.46 1.41m0 0c-.806-.779.808.78 0 0m0 0c.804.78 2.12.781 2.928 0a1.95 1.95 0 0 0 0-2.828 2.123 2.123 0 0 0-2.929 0" />
    </g>
    <defs>
      <clipPath id="home-infinity_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeInfinity;
