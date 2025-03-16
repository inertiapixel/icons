import * as React from "react";
import type { SVGProps } from "react";
const SvgMessagesOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#messages-off-icon_svg__a)"
    >
      <path d="m3 3 18 18M11 11a1 1 0 0 1-1-1m0-3.968V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10l-3-3h-3M14 15v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" />
    </g>
    <defs>
      <clipPath id="messages-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessagesOffIcon;
