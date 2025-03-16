import * as React from "react";
import type { SVGProps } from "react";
const SvgSnowboardingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#snowboarding-icon_svg__a)"
    >
      <path d="M15 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 19l4-2.5-.5-1.5M16 21l-1-6-4.5-3L14 6" />
      <path d="m7 9 1.5-3H14l2 4 3 1M3 17q.598 1.732 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927q2 .488 3-.976" />
    </g>
    <defs>
      <clipPath id="snowboarding-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSnowboardingIcon;
