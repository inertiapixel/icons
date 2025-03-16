import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rotate-dot-icon_svg__a)"
    >
      <path d="M19.952 11a8 8 0 1 0-.5 4m.5 5v-5h-5" />
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="rotate-dot-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRotateDotIcon;
