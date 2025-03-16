import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartbeatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heartbeat-icon_svg__a)"
    >
      <path d="M19.501 13.572 12.001 21l-2.896-2.868m-6.117-8.104a5 5 0 0 1 9.013-3.022 5.002 5.002 0 0 1 8.52.876 5 5 0 0 1-1.02 5.696" />
      <path d="M3 13h2l2 3 2-6 1 3h3" />
    </g>
    <defs>
      <clipPath id="heartbeat-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartbeatIcon;
