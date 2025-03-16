import * as React from "react";
import type { SVGProps } from "react";
const SvgScissorsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scissors-icon_svg__a)"
    >
      <path d="M3 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M8.602 8.602l10.4 10.4M8.602 15.4 19.002 5" />
    </g>
    <defs>
      <clipPath id="scissors-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScissorsIcon;
