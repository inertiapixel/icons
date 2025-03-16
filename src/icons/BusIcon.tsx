import * as React from "react";
import type { SVGProps } from "react";
const SvgBusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bus-icon_svg__a)"
    >
      <path d="M4 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M4 17H2V6a1 1 0 0 1 1-1h14c1.326 0 2.598.737 3.535 2.05S22 10.143 22 12v5h-2m-4 0H8" />
      <path d="m16 5 1.5 7H22M2 10h15M7 5v5M12 5v5" />
    </g>
    <defs>
      <clipPath id="bus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBusIcon;
