import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageDollarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-dollar-icon_svg__a)"
    >
      <path d="M8 9h8M8 13h6M13 18l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3.5M21 15h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17M19 21v1m0-8v1" />
    </g>
    <defs>
      <clipPath id="message-dollar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageDollarIcon;
