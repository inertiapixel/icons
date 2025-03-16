import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brackets-off-icon_svg__a)"
    >
      <path d="M5 5v15h3M16 4h3v11m0 4v1h-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="brackets-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBracketsOffIcon;
