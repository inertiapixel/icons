import * as React from "react";
import type { SVGProps } from "react";
const SvgMessages = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#messages_svg__a)"
    >
      <path d="m21 14-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zM14 15v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" />
    </g>
    <defs>
      <clipPath id="messages_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessages;
