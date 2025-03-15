import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCancel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-cancel_svg__a)"
    >
      <path d="M8 9h8M8 13h6M11.995 18.603 8 21v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 21l4-4" />
    </g>
    <defs>
      <clipPath id="message-cancel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCancel;
