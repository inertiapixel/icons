import * as React from "react";
import type { SVGProps } from "react";
const SvgMailboxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mailbox-icon_svg__a)"
    >
      <path d="M10 21v-6.5A3.5 3.5 0 0 0 6.5 11m0 0A3.5 3.5 0 0 0 3 14.5V21h18v-6a4 4 0 0 0-4-4zM12 11V3h4l2 2-2 2h-4M6 15h1" />
    </g>
    <defs>
      <clipPath id="mailbox-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailboxIcon;
