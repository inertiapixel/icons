import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureCelsius = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#temperature-celsius_svg__a)"
    >
      <path d="M4 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0M20 9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3" />
    </g>
    <defs>
      <clipPath id="temperature-celsius_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTemperatureCelsius;
