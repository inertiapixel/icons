import * as React from "react";
import type { SVGProps } from "react";
const SvgCraneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#crane-icon_svg__a)"
    >
      <path d="M6 21h6M9 21V3L3 9h18M9 3l10 6" />
      <path d="M17 9v4a2 2 0 1 1-2 2" />
    </g>
    <defs>
      <clipPath id="crane-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCraneIcon;
