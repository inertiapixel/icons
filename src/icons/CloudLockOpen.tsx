import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudLockOpen = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cloud-lock-open_svg__a)"
    >
      <path d="M19 18a3.5 3.5 0 1 0 0-7h-1c.397-1.769-.285-3.594-1.788-4.788-1.503-1.193-3.6-1.575-5.5-1S7.397 7.232 7 9c-2.2-.088-4.155 1.326-4.666 3.373S2.898 16.526 4.9 17.4" />
      <path d="M8 16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM10 15v-2a2 2 0 0 1 3.736-1" />
    </g>
    <defs>
      <clipPath id="cloud-lock-open_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudLockOpen;
