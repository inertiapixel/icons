import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureFahrenheitIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#temperature-fahrenheit-icon_svg__a)"
    >
      <path d="M4 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0M13 12h5M20 6h-6a1 1 0 0 0-1 1v11" />
    </g>
    <defs>
      <clipPath id="temperature-fahrenheit-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTemperatureFahrenheitIcon;
