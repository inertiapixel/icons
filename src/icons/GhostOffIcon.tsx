import * as React from "react";
import type { SVGProps } from "react";
const SvgGhostOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ghost-off-icon_svg__a)"
    >
      <path d="M8.792 4.777a7 7 0 0 1 10.206 6.224v4m-.12 3.898a1.78 1.78 0 0 1-2.98.502 1.65 1.65 0 0 0-2.6 0 1.65 1.65 0 0 1-2.6 0 1.65 1.65 0 0 0-2.6 0 1.78 1.78 0 0 1-3.1-1.4v-7c0-1.683.594-3.227 1.583-4.434M14 10h.01" />
      <path d="M10 14a3.5 3.5 0 0 0 4 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ghost-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGhostOffIcon;
