import * as React from "react";
import type { SVGProps } from "react";
const SvgBusOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bus-off-icon_svg__a)"
    >
      <path d="M4 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16.18 16.172a2 2 0 0 0 2.652 2.648" />
      <path d="M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8" />
      <path d="m16 5 1.5 7H22M2 10h8m4 0h3M7 7v3M12 5v3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bus-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBusOffIcon;
