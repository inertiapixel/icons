import * as React from "react";
import type { SVGProps } from "react";
const SvgStackBackwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stack-backward-icon_svg__a)"
    >
      <path d="m14 12 6-3-8-4-8 4 6 3" />
      <path fill="currentColor" d="m10 12-6 3 8 4 8-4-6-3-2 1z" />
    </g>
    <defs>
      <clipPath id="stack-backward-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStackBackwardIcon;
