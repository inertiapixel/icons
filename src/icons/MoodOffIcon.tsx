import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-off-icon_svg__a)"
    >
      <path d="M5.634 5.638a9 9 0 1 0 12.732 12.724m1.68-2.322A9 9 0 0 0 7.965 3.954M9 10h.01M15 10h.01" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="mood-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodOffIcon;
