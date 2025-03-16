import * as React from "react";
import type { SVGProps } from "react";
const SvgRefreshOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#refresh-off-icon_svg__a)"
    >
      <path d="M20 11A8.1 8.1 0 0 0 8.729 4.695M6.319 6.32A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 13.671 4.691M20 16v-1h-1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="refresh-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRefreshOffIcon;
