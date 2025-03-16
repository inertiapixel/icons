import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ticket-off-icon_svg__a)"
    >
      <path d="M15 5v2M15 17v2M9 5h10a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3m-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4V7a2 2 0 0 1 2-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ticket-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTicketOffIcon;
