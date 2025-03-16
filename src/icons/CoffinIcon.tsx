import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#coffin-icon_svg__a)"
    >
      <path d="M7 3 5 9l2 12h6l2-12-2-6zM10 7v5M8 9h4" />
      <path d="M13 21h4l2-12-2-6h-4" />
    </g>
    <defs>
      <clipPath id="coffin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoffinIcon;
