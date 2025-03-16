import * as React from "react";
import type { SVGProps } from "react";
const SvgPowerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#power-icon_svg__a)"
    >
      <path d="M7 6a7.75 7.75 0 1 0 10 0M12 4v8" />
    </g>
    <defs>
      <clipPath id="power-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPowerIcon;
