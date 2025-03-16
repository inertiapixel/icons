import * as React from "react";
import type { SVGProps } from "react";
const SvgBrailleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#braille-icon_svg__a)"
    >
      <path d="M15 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M16 12h.01M8 12h.01M16 19h.01" />
    </g>
    <defs>
      <clipPath id="braille-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrailleIcon;
