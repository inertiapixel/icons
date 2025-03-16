import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaceholderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#placeholder-icon_svg__a)"
    >
      <path d="M10 20.415a7.999 7.999 0 0 0 10.757-9.384A8 8 0 0 0 13 5h-3" />
      <path d="m13 8-3-3 3-3M7 17l4-4-4-4-4 4z" />
    </g>
    <defs>
      <clipPath id="placeholder-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaceholderIcon;
