import * as React from "react";
import type { SVGProps } from "react";
const SvgSandboxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sandbox-icon_svg__a)"
    >
      <path d="M19.953 8.017 21 15v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2l1.245-8.297A2 2 0 0 1 6.222 5H10M3 15h18M13 3l5.5 1.5M15.75 3.75l-2 7" />
      <path d="M7 10.5q2.5-1 5 0t5 0" />
    </g>
    <defs>
      <clipPath id="sandbox-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSandboxIcon;
