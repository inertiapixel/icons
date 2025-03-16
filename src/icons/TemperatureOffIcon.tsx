import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#temperature-off-icon_svg__a)"
    >
      <path d="M10 10v3.5a4 4 0 1 0 5.836 2.33M14 10V5a2 2 0 1 0-4 0v1M13 9h1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="temperature-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTemperatureOffIcon;
