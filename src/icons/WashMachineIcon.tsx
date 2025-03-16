import * as React from "react";
import type { SVGProps } from "react";
const SvgWashMachineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wash-machine-icon_svg__a)"
    >
      <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M8 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0M8 6h.01M11 6h.01M14 6h2" />
      <path d="M8 14q2-1 4 0t4 0" />
    </g>
    <defs>
      <clipPath id="wash-machine-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWashMachineIcon;
