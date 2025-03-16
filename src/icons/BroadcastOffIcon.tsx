import * as React from "react";
import type { SVGProps } from "react";
const SvgBroadcastOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#broadcast-off-icon_svg__a)"
    >
      <path d="M18.364 19.364a9 9 0 0 0-9.72-14.717m-2.489 1.51a9 9 0 0 0-.519 13.207" />
      <path d="M15.536 16.536A5 5 0 0 0 12 8M9 9a5 5 0 0 0-.535 7.536M12 12a1 1 0 1 0 1 1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="broadcast-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBroadcastOffIcon;
