import * as React from "react";
import type { SVGProps } from "react";
const SvgReloadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#reload-icon_svg__a)"
    >
      <path d="M19.932 13.04a8 8 0 1 1-9.925-8.788c3.9-1 7.935 1.007 9.425 4.747" />
      <path d="M20 4v5h-5" />
    </g>
    <defs>
      <clipPath id="reload-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReloadIcon;
