import * as React from "react";
import type { SVGProps } from "react";
const SvgBoldIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bold-icon_svg__a)"
    >
      <path d="M7 5h6a3.5 3.5 0 1 1 0 7H7zM13 12h1a3.5 3.5 0 1 1 0 7H7v-7" />
    </g>
    <defs>
      <clipPath id="bold-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBoldIcon;
