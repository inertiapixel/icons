import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseSmileIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#database-smile-icon_svg__a)"
    >
      <path d="M10 14h.01M14 14h.01M10 17a3.5 3.5 0 0 0 4 0M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
      <path d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
    </g>
    <defs>
      <clipPath id="database-smile-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDatabaseSmileIcon;
