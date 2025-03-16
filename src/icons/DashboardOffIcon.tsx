import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboardOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dashboard-off-icon_svg__a)"
    >
      <path d="M11.175 11.18a2 2 0 1 0 2.653 2.634M14.5 10.5l1-1" />
      <path d="M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488A9 9 0 0 1 17.6 20H6.4a9 9 0 0 1-.268-13.87M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="dashboard-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDashboardOffIcon;
