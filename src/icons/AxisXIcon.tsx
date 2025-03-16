import * as React from "react";
import type { SVGProps } from "react";
const SvgAxisXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#axis-x-icon_svg__a)"
    >
      <path d="M4 13v.01M4 9v.01M4 5v.01M17 20l3-3-3-3M4 17h16" />
    </g>
    <defs>
      <clipPath id="axis-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAxisXIcon;
