import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#notification-off-icon_svg__a)"
    >
      <path d="M6.154 6.188A2 2 0 0 0 5 8v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811-1.152M14 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="notification-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotificationOffIcon;
