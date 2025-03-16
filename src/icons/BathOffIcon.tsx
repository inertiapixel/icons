import * as React from "react";
import type { SVGProps } from "react";
const SvgBathOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bath-off-icon_svg__a)"
    >
      <path d="M16 12h4a1 1 0 0 1 1 1v3q-.001.468-.103.904m-1.61 2.378c-.67.469-1.469.72-2.287.718H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1h8M6 12V6m1.178-2.824C7.43 3.063 7.708 3 8 3h3v2.25M4 21l1-1.5M20 21l-1-1.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bath-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBathOffIcon;
